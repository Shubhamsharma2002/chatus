{
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data: newPostForm.serialize(),
                success:function(data){
                    let newPost = newpostDom(data.data.post);
                    $('#posts-list-container>ul').prepend(newPost);
                    deletePost($(' .delete-post-button', newPost))
                    console.log(newPost)
                }, error:function(error){
                    console.log(error.responseText);
                }
            })
        })
    }
// method to create a post in dom

let newpostDom = function(post){
    return $(`<li id="post-${post._id}">
    <p>
       
            <small><a class="delete-post-button" href="/posts/destory/${post._id}">dll</a></small>
       
    ${ post.user.name }
    <br>
    ${ post.content }
    
</p>

<div class="post-comment">
    
          <form action="/comments/create" method="post">
         <input type="text" name="content" placeholder="Type here for comments" required>
         <input type="hidden" name="post"  value="${post._id}">
         <input type="submit" value="Add comment">

          </form>
   
     <div class="post-comment-list">
          <ul id="post-comment-${post._id}">
                
           
               
        
        </ul>

     </div>

      
</div>
  </li>`)
}



// method to delete the post to the dom

let deletePost = function(deleteLink){
    $(deleteLink).click(function(e){
        e.preventDefault();
        $.ajax({
            type:'get',
            url:$(deleteLink).prop('href'),
            success: function(data){
                 $(`#post-${data.post_id}`).remove();
            },error :function(error){
                console.log(error.responseText)
            }
        })
    })
}
    createPost();
}