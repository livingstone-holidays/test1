const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoibGl2aW5nc3RvbmVzdGF5cyIsImEiOiJja3EyOGZoNTEwbTJ0MndwODVvdmlsMzNpIn0.1RIytc5O3-uTZHCjysTAuw",
CSV: "https://docs.google.com/spreadsheets/d/1n8vdoGi86H6-3dgfL9zI2L_N6n2i9VzJkvpSP9LRWV4/export?format=csv&id=1n8vdoGi86H6-3dgfL9zI2L_N6n2i9VzJkvpSP9LRWV4&gid=0",
  center: [79.904,31.357,],
  zoom: 6.5,
  title: "LivingStone Stays",
  description:
    "Explore LivingStone Stays to plan a memorable holiday!",
  sideBarInfo: ["Property_Name", "Region", "Property_Type"],
  popupInfo: ["Property_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Languages supported: ",
      columnHeader: "Languages",
      listItems: [
        "Amharic",
        "ASL",
        "Cambodian",
        "Chinese",
        "Danish",
        "English",
        "French",
        "German",
        "Greek",
        "Hindi",
        "Italian",
        "Japanese",
        "Korean",
        "Language Line Services",
        "Norwegian",
        "Oriya",
        "Portuguese",
        "Punjabi",
        "Russian",
        "Somali",
        "Spanish",
        "Swedish",
        "Tagalog",
        "Thai",
        "Tigrinya",
        "Tongan",
        "Vietnamese",
        "Ukranian",
      ],
    },
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },
  ],
};
