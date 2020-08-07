## General Details

The stories

## Models

### Articles
  * An article be able to be represented fully on it's own page, including:
    * A header image
    * An author with profile image
    * The actual text of the article
    * A comments section
    * An ability to like the article and show how many likes it has
    * *(links to related articles/articles by the same author)?
  * Relationships:
    * belongs to one user (the author)
    * has many comments
    * belongs to many users through likes
    * *(belongs to one category)?*
    
### Users
  * A user should be able to be listed as the author of a specific article
  * Relationships:
    * has many articles they have authored
    * belongs to many articles through likes
    
 ### Comments
  * A comment on an article should have a user who wrote it and a message
  * Relationships: 
    * belongs to one article
    * belongs to one other comment if it is in reply to that comment
    * has many other comments in reply to it



## Endpoints

* /stories  -- Main page for stories.
* /posts/:id  -- Invidual story pages.
* /stories/drafts  -- Lists stories currently awaiting publish.
* /stories/public  -- Lists stories published.
* /new-story  -- Story creation.
* /edit-story  -- Editing existing story.
* /users/:id  -- Profile page


## Templates


## Wireframes/Sketches
