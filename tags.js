const API = " https://api.codingninjas.com/api/v3/event_tags"

const tagHolder = document.querySelector(".tag-container")
// console.log(tagHolder)
// console.log(typeof(tagHolder))

async function getTags() {
  const res = await fetch(API).catch((err) => {
    console.error(err)
  })

  const json1 = await res.json()
  //   console.log(json1)  //! Displaying data

  // const a = data.

  const len1 = json1.data.tags
  var x = parseInt(Object.keys(len1).length)

  const arr = []

  for (i = 0; i < x; i++) {
    // let tags = json1.data.tags[i]

    // console.log(tags)
    // console.log(typeof tags)

    const tags1 = json1.data.tags[i]
    arr.push(tags1)

    const tagElements = document.createElement("div")
    tagElements.classList.add("tags")
    tagElements.innerHTML = tags1

    tagHolder.appendChild(tagElements)
  }
//   console.log(arr)
//   console.log(typeof arr)
}

getTags()
