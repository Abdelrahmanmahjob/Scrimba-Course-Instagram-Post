const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector("main")

for (let i = 0; i < posts.length; i++) {
    const postHtml = 
    `
        <div class="user-post">
            <section class="user-profile">
                <img class="small-image user-image" src="${posts[i].avatar}" alt="">
                <div class="user-info">
                    <p class="name">${posts[i].name}</p>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </section>
            
            <section>
                <img class="post-image" src="${posts[i].post}" alt="" aria-checked="false">
            </section>
            
            <section class="interactive-icons inline-padding">
                <ul class="icons-list">
                    <li><i class="heard-icon fa-regular fa-heart" aria-checked="false"></i></li>
                    <li><img class="small-icon" src="images/icon-comment.png"></li>
                    <li><img class="small-icon" src="images/icon-dm.png"></li>
                </ul>
                <div class="likes">
                    <p><span class="likes-num">${posts[i].likes}</span> likes</p>
                </div>
                <div class="user-action">
                    <p>
                        <strong class="user-name">${posts[i].username}</strong> 
                        <span class="user-comment">${posts[i].comment}</span>
                    </p>
                </div>
            </section>
        </div>
    `
    main.innerHTML += postHtml
}


function handleLikeAction(e, isDoubleClick) {
    const currentEle = e.target;
    const isImagePost = currentEle.classList.contains("post-image");
    const isHeartIcon = currentEle.classList.contains("heard-icon");

    if ((isImagePost && isDoubleClick) || (isHeartIcon && !isDoubleClick)) {
        const relatedLikeNum = currentEle.closest(".user-post").querySelector(".likes-num")
        const relatedHeardIcon = currentEle.closest(".user-post").querySelector(".heard-icon")
        const relatedPostImage = currentEle.closest(".user-post").querySelector(".post-image")
    
        if (currentEle.ariaChecked === "false") {
            relatedLikeNum.textContent = Number(relatedLikeNum.textContent) + 1
            relatedHeardIcon.classList.add("checked")
            relatedHeardIcon.ariaChecked = "true"
            relatedPostImage.ariaChecked = "true"
        } else {
            relatedLikeNum.textContent = Number(relatedLikeNum.textContent) - 1
            relatedHeardIcon.classList.remove("checked")
            relatedHeardIcon.ariaChecked = "false"   
            relatedPostImage.ariaChecked = "false"
        }
    } 
}

main.addEventListener("click", (e) => handleLikeAction(e, false))
main.addEventListener("dblclick", (e) => handleLikeAction(e, true))

// imagesPost.forEach(img => {
//     img.addEventListener("dblclick", (e) => {
//         const currentImage = e.target
//         const relatedLikeNum = currentImage.closest(".user-post").querySelector(".likes-num")
//         const relatedHeardIcon = currentImage.closest(".user-post").querySelector(".heard-icon")
//         if (currentImage.ariaChecked === "false") {
//             relatedLikeNum.textContent = Number(relatedLikeNum.textContent) + 1
//             relatedHeardIcon.classList.add("checked")
//             relatedHeardIcon.ariaChecked = "true"
//             currentImage.ariaChecked = "true"
//         } else {
//             relatedLikeNum.textContent = Number(relatedLikeNum.textContent) - 1
//             relatedHeardIcon.classList.remove("checked")
//             relatedHeardIcon.ariaChecked = "false"
//             currentImage.ariaChecked = "false"
//         }
//     })
// })


// headrIcon.forEach(icon => {
//     icon.addEventListener("click" , (e) => {
//         const currentIcon = e.target
//         const relatedLikeNum =  currentIcon.closest(".user-post").querySelector(".likes-num")
//         const relatedImagePost =  currentIcon.closest(".user-post").querySelector(".post-image")
//             if(currentIcon.ariaChecked === "false") {
//                 relatedLikeNum.textContent = Number(relatedLikeNum.textContent) + 1
//                 currentIcon.classList.add("checked")
//                 currentIcon.ariaChecked = "true"
//                 relatedImagePost.ariaChecked = "true"
//             } else {
//                 relatedLikeNum.textContent = Number(relatedLikeNum.textContent) - 1
//                 currentIcon.classList.remove("checked")
//                 currentIcon.ariaChecked = "false"
//                 relatedImagePost.ariaChecked = "false"
//             }
//         })
//     }
// )
