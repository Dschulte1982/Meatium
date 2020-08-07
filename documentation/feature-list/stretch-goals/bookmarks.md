## General Details
This feature will allow a user to bookmark an article, which will be able to be referenced later through the bookmarks tab.

## Models

### Users
  * A user should be able to have a list of bookmarks they have created to save an article for later reading
  * Relationships:
    * belongs to many articles through a bookmark model

### Articles
  *
  * Relationships:
    * belongs to many users through a bookmark model

### Bookmarks
  * A bookmark should be able to be removed when the user is done reading it
  * Relationships:
    * belongs to one user
    * belongs to one article


---


## Endpoints

* /posts/:id/bookmark/:id -- Bookmarks the current post and adds it to the bookmarks table.
* /posts/:id/bookmark:/id/delete -- Deletes an existing bookmark, removing it from teh bookmarks table.


---


## Templates
  * bookmarks-list.pug

## Wireframes/Sketches
