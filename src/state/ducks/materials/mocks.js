// public searchSuggestions(req: Request, res: Response) {
//     const textToMatch: string = req.query.suggestion.toLowerCase()
//     firebase.database().ref('/suggestions').on('value', snapshot => {
//         const filteredData = snapshot.val().filter((suggestion: Suggestion) => {
//             return suggestion.keyword.toLowerCase().includes(textToMatch)
//         })
//         res.status(200).json(filteredData)
//     })
// }

export const materials = [
    {
        "id": "-LL3NT9pJD_wvVxftlPj",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "description",
            "faq": {
                "customizedOrders": "Are not allowed",
                "freeSamples": "100 free samples",
                "manufacturer": "I'm not a manufacturer",
                "minimumQuantity": "200l",
                "paymentType": "cash or bank transfer"
            },
            "services": {
                "descriptions": ["Best liquied detergent for you", "simply the best"]
            }
        },
        "description": "Ariel 2",
        "location": {
            "address": "Strashe Verno, no 2, Munich, Germany",
            "latitude": "86.0222",
            "longitude": "23.9562"
        },
        "minimumOrder": "50l",
        "name": "Liquied detergent",
        "open": false,
        "overview": {
            "temper": "soft",
            "type": "liquid"
        },
        "packaging": "Jars of 50L",
        "price": {
            "currency": "EUR",
            "value": "20"
        },
        "scroll": "paper",
        "shortDescription": "The best liquied detergent from the market",
        "supplyAbility": {
            "period": "week",
            "weight": "5000",
            "weightType": "liters"
        },
        "userId": "i8Ez4WFY4OWVaAYBFEQvwZntmZF3"
    },
    {
        "id": "-LL3OaMqyoshyov4r7_l",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "description",
            "faq": {
                "customizedOrders": "Are not allowed",
                "freeSamples": "100 free samples",
                "manufacturer": "I'm not a manufacturer",
                "minimumQuantity": "200l",
                "paymentType": "cash or bank transfer"
            },
            "services": {
                "descriptions": ["Best liquied detergent for you", "simply the best"]
            }
        },
        "description": "Ariel ftw",
        "location": {
            "address": "Strashe Verno, no 2, Munich, Germany",
            "latitude": "86.0222",
            "longitude": "23.9562"
        },
        "mainImage": "https://storage.googleapis.com/raw-materials-5e631.appspot.com/materials%2FmainImages%2F-LL3OaMqyoshyov4r7_l.jpg?GoogleAccessId=firebase-adminsdk-vp4iw%40raw-materials-5e631.iam.gserviceaccount.com&Expires=16447010400&Signature=xGd3O%2FPzz0j%2BJqWiFxVqN3Olzwu%2FfQpSjLE6g8%2BzWO%2FvTd8kjm387hmxHQfEu3COVDB5RJVllnAmDcnAaifbWZ2D6%2BOpA5o%2F9LBu7tmKnMCrqMXzu2Q4kbbYh%2FN6mXv8x%2FGSptqa05uw37GMHRT0kx7zQRWVK68p2W%2BnhixxsNwTHDyKFoovz82mN7UwRD9lX%2Fi5kUaV1oZVA35cYfu5XI1cG6lDH0ZYBFuL9XpqfOJecJXzGz9MXFxgNKVatEanTw4k%2BW1t9Lkd8Lt0J2m%2FO97mwx5Si8A5B7ZNVb1YCf7yIXjUTI%2FzsqUx4%2F983xGCF9ZiNeIIdFIpeR5l2tUmyQ%3D%3D",
        "minimumOrder": "50l",
        "name": "Liquied detergent",
        "overview": {
            "temper": "soft",
            "type": "liquid"
        },
        "packaging": "Jars of 50L",
        "price": {
            "currency": "EUR",
            "value": "20"
        },
        "shortDescription": "The best liquied detergent from the market",
        "supplyAbility": {
            "period": "week",
            "weight": "5000",
            "weightType": "liters"
        },
        "userId": "boMDNtE8jAZVAE4H8j0VTIclbPs1"
    },
    {
        "id": "m1",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "describe your company",
            "faq": {
                "customizedOrders": "write about this",
                "freeSamples": "write about this",
                "manufacturer": "describe whether you're a manufacturer or not",
                "minimumQuantity": "write about this",
                "paymentType": "write about this"
            },
            "services": {
                "descriptions": ["we are the best", "simply the best", "make america great again"]
            }
        },
        "description": "more detailed description about the material",
        "location": {
            "address": "Eterna Strada, no 20, Milano, Italy",
            "latitude": "44.025252",
            "longitude": "22.956202"
        },
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fm1.jpg?alt=media&token=3a4793f7-fd8d-4c91-b6aa-8c46fd129210",
        "minimumOrder": "100 kg",
        "name": "Aluminium raw material",
        "overview": {
            "temper": "soft",
            "type": "roll"
        },
        "packaging": "describe packaging here",
        "price": {
            "currency": "USD",
            "high": "1870",
            "low": "1350"
        },
        "shortDescription": "something short to describe the material",
        "supplyAbility": {
            "period": "month",
            "weight": "5",
            "weightType": "tons"
        },
        "userId": "i8Ez4WFY4OWVaAYBFEQvwZntmZF3"
    },
    {
        "id": "m2",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "describe your company",
            "faq": {
                "customizedOrders": "write about this",
                "freeSamples": "write about this",
                "manufacturer": "describe whether you're a manufacturer or not",
                "minimumQuantity": "write about this",
                "paymentType": "write about this"
            },
            "services": {
                "descriptions": ["we are the best", "simply the best", "make america great again"]
            }
        },
        "description": "updated description",
        "location": {
            "address": "Eterna Strada, no 20, Milano, Italy",
            "latitude": "44.025252",
            "longitude": "22.956202"
        },
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fm2.jpg?alt=media&token=5daedc81-e821-412b-ac1f-743d7b556957",
        "minimumOrder": "100 kg",
        "name": "PVC bond",
        "overview": {
            "temper": "soft",
            "type": "roll"
        },
        "packaging": "describe packaging here",
        "price": {
            "currency": "EUR",
            "value": "150"
        },
        "shortDescription": "something short to describe the material",
        "supplyAbility": {
            "period": "month",
            "weight": "5",
            "weightType": "tons"
        },
        "userId": "UVp4qvX7ZXe9SMHhm5UzxGPAJwW2"
    },
    {
        "id": "m3",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "describe your company",
            "faq": {
                "customizedOrders": "write about this",
                "freeSamples": "write about this",
                "manufacturer": "describe whether you're a manufacturer or not",
                "minimumQuantity": "write about this",
                "paymentType": "write about this"
            },
            "services": {
                "descriptions": ["we are the best", "simply the best", "make america great again"]
            }
        },
        "description": "more detailed description about the material",
        "location": {
            "address": "Eterna Strada, no 20, Milano, Italy",
            "latitude": "44.025252",
            "longitude": "22.956202"
        },
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fm3.jpg?alt=media&token=cd0f15e2-6a51-47f6-ad71-2914574f6659",
        "minimumOrder": "100 kg",
        "name": "Aluminium strip",
        "overview": {
            "temper": "soft",
            "type": "roll"
        },
        "packaging": "describe packaging here",
        "price": {
            "currency": "RON",
            "value": "970"
        },
        "shortDescription": "something short to describe the material",
        "supplyAbility": {
            "period": "month",
            "weight": "5",
            "weightType": "tons"
        },
        "userId": "84NNnUKCGcc2HYT9w2wyqXqadHz2"
    },
    {
        "id": "m4",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "describe your company",
            "faq": {
                "customizedOrders": "write about this",
                "freeSamples": "write about this",
                "manufacturer": "describe whether you're a manufacturer or not",
                "minimumQuantity": "write about this",
                "paymentType": "write about this"
            },
            "services": {
                "descriptions": ["we are the best", "simply the best", "make america great again"]
            }
        },
        "description": "more detailed description about the material",
        "location": {
            "address": "Eterna Strada, no 20, Milano, Italy",
            "latitude": "44.025252",
            "longitude": "22.956202"
        },
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fm4.jpg?alt=media&token=152cae73-938f-4ed3-ba1b-e663ee6094ad",
        "minimumOrder": "100 kg",
        "name": "Aluminium roll",
        "overview": {
            "temper": "soft",
            "type": "roll"
        },
        "packaging": "describe packaging here",
        "price": {
            "currency": "USD",
            "high": "1350",
            "low": "1250"
        },
        "shortDescription": "something short to describe the material",
        "supplyAbility": {
            "period": "month",
            "weight": "5",
            "weightType": "tons"
        },
        "userId": "boMDNtE8jAZVAE4H8j0VTIclbPs1"
    },
    {
        "id": "m5",
        "companyInfo": {
            "certification": "describe company/product certification",
            "description": "describe your company",
            "faq": {
                "customizedOrders": "write about this",
                "freeSamples": "write about this",
                "manufacturer": "describe whether you're a manufacturer or not",
                "minimumQuantity": "write about this",
                "paymentType": "write about this"
            },
            "services": {
                "descriptions": ["we are the best", "simply the best", "make america great again"]
            }
        },
        "description": "more detailed description about the material",
        "location": {
            "address": "Eterna Strada, no 20, Milano, Italy",
            "latitude": "44.025252",
            "longitude": "22.956202"
        },
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fm5.jpg?alt=media&token=96da016e-e4ac-47f0-a182-49598c5552e4",
        "minimumOrder": "100 kg",
        "name": "Iron raw",
        "overview": {
            "temper": "soft",
            "type": "roll"
        },
        "packaging": "describe packaging here",
        "price": {
            "currency": "USD",
            "low": "900",
            "value": "900"
        },
        "shortDescription": "something short to describe the material",
        "supplyAbility": {
            "period": "month",
            "weight": "5",
            "weightType": "tons"
        },
        "userId": "boMDNtE8jAZVAE4H8j0VTIclbPs1"
    }
]

export const suggestions =
    [
        { "keyword": "wood" },
        { "keyword": "Aluminium" },
        { "keyword": "Aluminium material" },
        { "keyword": "Aluminium band" },
        { "keyword": "PVC" },
        { "keyword": "Rubber" },
        { "keyword": "Wool" },
        { "keyword": "Aloe Vera" }
    ]