fetch(
    "https://api-inference.huggingface.co/models/lxyuan/distilbert-base-multilingual-cased-sentiments-student",
    {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify("data"),
    }
).then(val =>val.json()).then(val => console.log(val));