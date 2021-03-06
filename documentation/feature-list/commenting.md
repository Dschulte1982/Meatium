## General Details
This feature will allow a user to leave a comment in the story comments thread. They will have the ability to post a new comment, edit an existing comment, or delete their comment altogether.

## Models

### Users
  * A user should be able to create many comments on specific articles for any other user to see.
  * Relationships:
    * has many articles they have authored
    * has many comments they have created
    * has many other users they have followed
    * *(belongs to many categories through their interests)?*

### Articles
  * An article should have access to all of the comments related to it
  * Relationships:
    * belongs to one user (the author)
    * has many comments in response to it
    * *(belongs to one category)?*

### Comments
  * A comment should be connected to a specific article and one user with a message and possibly able to reply to another comment?
  * Relationships:
    * belongs to one user (the commentor)
    * belongs to one article (to which it is responding)
    * *(belongs to one other comment to which it is replying)?*


---


## Enpoints

* /posts/:id/comment/:id  -- Add a comment to an existing story page.
* /posts/:id/comment:/id/edit -- Edit an existing comment.
* /posts/:id/comment/:id/delete  -- Delete a posted comment.


---


## Templates
  * comments-new.pug
  * comments-list.pug
  * comments-edit.pug

## Wireframes/Sketches

![an example comments bar from medium.com](../images/comments-sidebar.png)
