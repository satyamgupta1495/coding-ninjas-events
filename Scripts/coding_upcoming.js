const API_URL =
  "https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=Interview Preparation, Contest Solutions,  Competitive Programming,  Futuristic Tech,  Coding Concepts,  Career Guidance,  Web Development,  Android,  Machine Learning, Campus Event,  Online Coding Event,  Hackathon,  Women Who Code, GSoC,  Placement, Aptitude Preparation,  Efficient Coding,  Programming Contest,  Coding Marathon,  All Night Coding,  Code Wars,  Scholarship Test&offset=0"

const rand = document.querySelector(".card-wrapper")
const activetab = document.querySelector("spanelement")

function getallDate(a) {
  let d = new Date()
  let arr = []

  let hours = d.getHours(a)

  var timeString = hours + ":00:00"
  var H = +timeString.substr(0, 2)
  var h = H % 12 || 12
  var ampm = H < 12 || H === 24 ? " AM" : " PM"
  timeString = h + timeString.substr(2, 3) + ampm
  console.log(timeString)

  arr.push(timeString + " ")

  let date = d.getDate(a)
  arr.push(date + " ")

  let month = d.getMonth(a)
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  var selectedMonthName = months[month]

  arr.push(selectedMonthName + " ")

  let year = d.getFullYear(a)
  arr.push(year)

  return arr
}

async function getImage() {
  rand.innerHTML = " "
  //! a href id-> here
  const active = document.querySelector("#code")
  active.classList.add("active")
  active.style.color = "#F09819"

  //! images id here

  const activetab3 = document.getElementById("code-active-img")
  activetab3.src = "Images/clickable/3.svg"

  const archive = document.querySelector("#archive")
  archive.style.color = "#BFBFBF"

  const upcoming = document.querySelector("#upcoming")
  upcoming.style.color = "#F09819"

  const favourite = document.querySelector("#favourite")
  favourite.style.color = "#BFBFBF"

  const response = await fetch(
    API_URL +
      new URLSearchParams({
        event_category: "CODING_EVENT",
        event_sub_category: "Upcoming",
        tag_list: "Interview Preparation",
        OFFSET: 0,
      })
  ).catch((err) => {
    console.error(err)
  })

  const json = await response.json()
  // console.log(json)

  const len = json.data.events
  var x = parseInt(Object.keys(len).length)
  console.log(typeof x)
  console.log(x)

  for (i = 0; i <= x; i++) {
    const coverImage = json.data.events[i].mobile_cover_picture

    const cardHolder = document.createElement("div")
    cardHolder.classList.add("card-holder")

    const imgElements = document.createElement("img")

    imgElements.classList.add("img")
    imgElements.src = coverImage

    cardHolder.appendChild(imgElements)

    const displayinfo = json.data.events[i].name
    // console.log(displayinfo)
    const info = document.createElement("p")
    info.innerHTML = "<b>"
    info.innerText = displayinfo
    info.classList.add("info")
    info.classList.add("p")

    const startHolder = document.createElement("div")
    startHolder.classList.add("start")

    const start = document.createElement("div")
    start.innerHTML = "<h5> Starts on </h5>"
    start.classList.add("start")

    const entry = document.createElement("div")
    entry.innerHTML = "<h5>Entry Fee </h5>"
    entry.classList.add("start")

    const venue = document.createElement("div")
    venue.innerHTML = "<h5>Venue</h5>"
    venue.classList.add("start")

    const shortDescription = json.data.events[i].short_desc
    // console.log(shortDescription)

    const shortDesc = document.createElement("div")
    shortDesc.innerHTML = shortDescription
    shortDesc.classList.add("scholar-ship")

    //! <------ START TIME - FEES - VENUE STARTS HERE ---->

    const venueHolder = document.createElement("div")
    venueHolder.classList.add("start-venue")

    const startTm = json.data.events[i].event_start_time
    let date = getallDate(startTm)

    const startTime = document.createElement("div")

    startTime.innerText = date

    startTime.classList.add("start-venue")

    const fees = json.data.events[i].fees
    console.log(fees)
    const eventFee = document.createElement("div")
    if (fees == 0) {
      eventFee.innerText = "Free"
      eventFee.classList.add("start-venue")
    } else {
      eventFee.innerText = fees
      eventFee.classList.add("start-venue")
    }

    const venue1 = json.data.events[i].venue
    // console.log(venue1)
    const eventVenue = document.createElement("div")
    eventVenue.innerHTML = venue1
    eventVenue.classList.add("start-venue")

    cardHolder.appendChild(startTime)
    cardHolder.appendChild(info)
    startHolder.appendChild(start)
    startHolder.appendChild(entry)
    startHolder.appendChild(venue)
    cardHolder.appendChild(startHolder)

    venueHolder.appendChild(startTime)
    venueHolder.appendChild(eventFee)
    venueHolder.appendChild(eventVenue)

    cardHolder.appendChild(venueHolder)
    cardHolder.appendChild(shortDesc)

    //! <------ START TIME - FEES - VENUE ENDS HERE ---->

    //! <------ TAG HOLDER STARTS HERE ---->

    const tagsholder = document.createElement("div")
    tagsholder.classList.add("tagHolder")

    for (j = 0; j <= x; j++) {
      if (json.data.events[i].card_tags[j] != null) {
        const tags = json.data.events[i].card_tags[j]
        // console.log(tags)

        const tagsList = document.createElement("h6")
        tagsList.innerText = tags
        tagsList.classList.add("tagList")

        tagsholder.appendChild(tagsList)

        cardHolder.appendChild(tagsholder)
      }

      //! <------ TAG HOLDER ENDS HERE ---->
    }

    //! <------ USERS STARTS HERE ---->

    let a = 0
    const holder = document.createElement("div")
    holder.classList.add("holder")
    const userHolder = document.createElement("div")
    userHolder.classList.add("registerbutton")
    while (a < 5) {
      const user = json.data.events[i].registered_users.top_users[a].image_url

      const userP = document.createElement("img")
      userP.src = user

      userHolder.appendChild(userP)
      // cardHolder.appendChild(userHolder)
      a++
    }

    //! <------ USERS ENDS HERE ---->

    //! <------ REGISTER NOW BUTTON STARTS HERE ---->

    const btn = document.createElement("button")
    btn.classList.add("registerbutton")
    btn.innerText = "REGISTER NOW"

    const buttonHolder = document.createElement("div")
    buttonHolder.classList.add("registerbutton")

    buttonHolder.appendChild(btn)

    //! <------ REGISTER NOW BUTTON ENDS HERE ---->

    //! <------ OTHER USERS STARTS HERE ---->

    const moreUsers = document.createElement("h5")
    moreUsers.innerHTML = "and"
    moreUsers.classList.add("OtherUser")

    const userCount = json.data.events[i].registered_users.other_users_count

    const OtherUser = document.createElement("h5")
    OtherUser.innerText = userCount
    OtherUser.classList.add("OtherUser")

    const moreUsers1 = document.createElement("h5")
    moreUsers1.innerHTML = "others are participating"
    moreUsers1.classList.add("OtherUser")

    // userHolder.appendChild(userP)
    const moreUsers1Holder = document.createElement("div")
    moreUsers1Holder.classList.add("moreUser")

    moreUsers1Holder.appendChild(moreUsers)
    moreUsers1Holder.appendChild(OtherUser)
    moreUsers1Holder.appendChild(moreUsers1)

    //! <------ OTHER USERS ENDS HERE ---->

    holder.appendChild(userHolder)
    holder.appendChild(userHolder)
    holder.appendChild(buttonHolder)

    cardHolder.appendChild(holder)
    cardHolder.appendChild(moreUsers1Holder)

    rand.appendChild(cardHolder)
  }
}

const upcoming = document.querySelector("#upcoming")
upcoming.addEventListener("click", getImage)

getImage()
