const express = require("express");
const cors = require("cors");
const app = express();

const eventCategories = [
  "Business & Professional",
  "Science & Tech",
  "Birthday",
  "Music",
  "Food & Drink",
  "Community & Culture",
  "Performing & Visual Arts",
  "Film, Media & Entertainment",
  "Sports & Fitness",
  "Health & Wellness",
  "Science & Technology",
  "Travel & Outdoor",
  "Charity & Causes",
  "Religion & Spirituality",
  "Family & Education",
  "Seasonal & Holiday",
  "Government & Politics",
  "Fashion & Beauty",
  "Home & Lifestyle",
  "Auto, Boat & Air",
  "Hobbies & Special Interest",
  "Outdoor & Adventure",
  "Pets & Animals",
  "Crafts",
  "Gaming",
  "Literature",
  "Language & Ethnic Identity",
  "Dance",
  "LGBTQ+",
  "Social",
  "Career & Education",
  "Cultural",
  "Politics",
  "Community",
  "Health & Wellness",
  "Religion",
  "Science & Tech",
  "Fashion & Beauty",
  "Home & Lifestyle",
  "Film & Media",
  "Auto, Boat & Air",
  "Hobbies & Special Interest",
  "Travel & Outdoor",
  "Sports & Fitness",
  "Music",
  "Arts",
  "Charity",
  "Business",
  "Technology",
  "Environment & Sustainability",
  "Finance & Investing",
  "Human Rights",
  "Legal",
  "Marketing & Sales",
  "Networking",
  "Personal Development",
  "Real Estate",
  "Social Media",
  "Startups & Entrepreneurship",
  "Veterans & Military",
  "Women's Events",
  "Youth Events",
  "Agriculture",
  "Astronomy",
  "Aviation",
  "Boating & Sailing",
  "Camping & Hiking",
  "Fashion Shows",
  "Food Trucks",
  "History",
  "Motorsports",
  "Photography",
  "Shopping",
  "Technology",
  "Weddings",
  "Workshops & Classes",
  "Other",
];


// middleware
app.use(express.json());
app.use(cors());

app.get("/event-categories", (req, res) => {
  res.json(eventCategories);
});

const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
