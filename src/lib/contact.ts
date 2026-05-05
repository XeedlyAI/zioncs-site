export const CONTACT = {
  phone: "(801) 637-8181",
  phoneHref: "tel:+18016378181",
  email: "admin@zioncs.com",
  address: {
    street: "Sandy, UT 84070",
    city: "Sandy",
    state: "UT",
    zip: "84070",
    full: "Sandy, UT 84070",
  },
  hours: {
    display: "Mon–Fri 8:00 AM – 5:00 PM",
    structured: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61573114690934",
    instagram: "https://www.instagram.com/zionconcretespecialists/",
  },
  website: "https://zioncs.com",
} as const;
