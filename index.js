console.log("hello world")

const params = {
  event_category: "WEBINAR",
  event_sub_category: "Archived",
  tag_list: "Interview Preparation",
  offset: 1,
}

// const resp = get("https://api.codingninjas.com/api/v3/events", params, method = 'GET') =>{
//     console.log(resp)
// }

const resp = fetch(
  "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Archived&tag_list=Interview Preparation&offset=1"
)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("NETWORK RESPONSE NOT OK")
    }
  })
  .then(function (data) {
    console.log(data)
    displayCocktail(data)
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error)
  })

let images =
  "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Archived&tag_list=Interview Preparation&offset=1" +
  data.events[0].event_category

console.log(images)
