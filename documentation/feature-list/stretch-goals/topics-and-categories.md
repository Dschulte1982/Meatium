## General Details
This feature will the user to select topics and categories they find interesting. This will display a new list of stories that are pre-defined to fall into the chosen category.

## Models

### Categories
  * A category should be a place to view many related articles on one specific topic
  * Relationships:
    * has many articles related to it
    * belongs to many users through the interest model

### Articles
  * An article should show up in a category that applies to it
  * Relationships:
    * belongs to one category *(for now?)*

### Users
  * A user should have articles from categories it is interested in show up in their feed
  * Relationships:
    * belongs to many categories through the interest model

### Interests
  * An interest should connect a user to a category they want to show up in their feed
  * Relationships:
    * belongs to one user
    * belongs to one category

---


## Endpoints

* /categories/:id/stories -- The list of stories that contain the particular category id are displayed.

---


## Templates
  * topics-list.pug

## Wireframes/Sketches

![example of topics from Medium.com](../images/explore-topics.png)
![example of category from Medium.com](../images/programming-topic.png)
