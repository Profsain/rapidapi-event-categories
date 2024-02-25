# Event Categories API

This Node.js API provides a list of event categories. It can be used to retrieve a comprehensive list of event categories for various purposes such as event management, filtering, and classification.

## Usage

### Base URL

The base URL for this API is `https://your-api-base-url.com`.

### Get Event Categories

#### Endpoint


#### Description

Returns an array containing all event categories.

#### Example Request

```bash
curl -X GET https://your-api-base-url.com/event-categories

### Example Response
[
  "Business & Professional",
  "Music",
  "Food & Drink",
  "Community & Culture",
  // More event categories...
  "Other"
]
