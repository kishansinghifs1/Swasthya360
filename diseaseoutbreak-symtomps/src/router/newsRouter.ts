import { Hono } from "hono";

export const newsRouter = new Hono<{
  Bindings: {
    NEWS_API_KEY: string;
  };
}>();

newsRouter.get("/ping", (c) => {
  return c.json({ message: "Welcome to the News API PONG" });
});

newsRouter.get("/outbreaks", async (c) => {
  const apiKey = c.env.NEWS_API_KEY;
  
  // Get date from 30 days ago (1 month)
  const fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // Simple query for India health news
  const healthQuery = "India health hospital medical";

  const url =
    `https://newsapi.org/v2/everything?` +
    `q=${encodeURIComponent(healthQuery)}&` +
    `from=${fromDate}&` +
    `language=en&` +
    `pageSize=100&` +
    `sortBy=publishedAt&` +
    `apiKey=${apiKey}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "IndiaHealthNewsAPI/1.0",
      },
    });

    if (!response.ok) {
      return c.json(
        { 
          error: "Failed to fetch news", 
          status: response.status,
          message: response.statusText
        },
        response.status as any
      );
    }

    const json: any = await response.json();

    const filtered = (json.articles as any[]).filter((article: any) => {
      const content = `${article.title} ${article.description} ${article.content || ''}`.toLowerCase();
      const hasIndiaReference = /\b(india|indian|delhi|mumbai|chennai|kolkata|bangalore|hyderabad|pune|ahmedabad|aiims|health ministry|medical council)\b/i.test(content);
      const hasHealthKeywords = /\b(health|medical|medicine|hospital|doctor|patient|disease|virus|infection|vaccination|vaccine|outbreak|epidemic|pandemic|healthcare|clinic|surgery|treatment|therapy|drug|pharmaceutical|covid|cancer|diabetes|heart|kidney|liver|brain|mental health|public health|medical college|nursing|ambulance|icu|emergency|blood|organ|transplant|diagnosis|cure|prevention|immunity|antibiotic|chronic|acute|fever|symptoms|mortality|morbidity)\b/i.test(content);
      return hasIndiaReference && hasHealthKeywords;
    });

    const sorted = filtered.sort((a: any, b: any) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return c.json({
      from: fromDate,
      to: new Date().toISOString().split("T")[0],
      region: "India",
      totalFound: json.totalResults || 0,
      filtered: filtered.length,
      articles: sorted,
    });
  } catch (err) {
    return c.json({ 
      error: "Server error", 
      details: String(err),
      timestamp: new Date().toISOString()
    }, 500);
  }
});


export default newsRouter;
