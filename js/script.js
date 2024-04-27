document.addEventListener('DOMContentLoaded', function() {
    // import Font Awesome CSS
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    function fetchVideos(course) {
        // Fetch videos based on the course
        if (course === 'react_redux') {
            // Fetch React & Redux videos using AJAX
            fetch('https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=1/react_redux')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch videos');
                    }
                    return response.json();
                })
                .then(data => {

                    const playlistContainer = document.querySelector('.playlist-videos .box-container');
                    playlistContainer.innerHTML = ''; // Clear existing content
                    data.forEach(video => {
                        const videoBox = document.createElement('div');
                        videoBox.classList.add('box');
                        videoBox.innerHTML = `
                            <a href="${video.url}" class="box">
                                <i class="fas fa-play"></i>
                                <img src="${video.thumbnail}" alt="">
                                <h3>${video.title}</h3>
                            </a>`;
                        playlistContainer.appendChild(videoBox);
                    });
                })
                .catch(error => {
                    console.error('Error fetching videos:', error);
                });
        } else if (course === 'c#') {
            fetch('https://www.youtube.com/watch?v=67oWw9TanOk&list=PL82C6-O4XrHfoN_Y4MwGvJz5BntiL0z0D/c#')
        } else if (course === 'java') {
            fetch('https://www.youtube.com/watch?v=r59xYe3Vyks&list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al/java')
        } else if (course === 'python') {
            fetch('https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3/python')
        } else if (course === 'vue') {
            fetch('https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1/vue')
        } else if (course === 'mysql') {
            fetch('https://www.youtube.com/watch?v=oPV2sjMG53U&list=PLZPZq0r_RZOMskz6MdsMOgxzheIyjo-BZ/mysql')
        } else if (course === 'javascript') {
            fetch('https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET/javascript')
        } else if (course === 'bi&sharepoint') {
            fetch('https://www.youtube.com/watch?v=Mu6oWtbk9Nc&list=PLoyECfvEFOjZ5avY1R9dcSZ3ZKGmuk1O4/bi&sharepoint')
        } else if (course === 'node.js') {
            fetch('https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp/node')
        } else if (course === 'shopify') {
            fetch('https://www.youtube.com/watch?v=7cx15NZmGO4&list=PLjVLYmrlmjGeL0C6P4l6ntGRhfxHaKKrc/shopify')
        } else if (course === 'angular') {
            fetch('https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ/angular')
        } else if (course === 'aws_cloud_practitioner') {
            fetch('https://www.youtube.com/watch?v=kvP_7jT-ImY&list=PLt1SIbA8guuvfvUDVLpJepmbnYpOfYCIB/aws_cloud_practitioner')
        }
    }

    // Dark mode toggle functionality
    let toggleBtn = document.getElementById('toggle-btn');
    let body = document.body;
    let darkMode = localStorage.getItem('dark-mode');

    const enableDarkMode = () => {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
        body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled');
    }

    const disableDarkMode = () => {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
        body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled');
    }

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    toggleBtn.onclick = (e) => {
        darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'disabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }


    // Event listeners for user profile and search functionality
    let profile = document.querySelector('.header .flex .profile');
    let search = document.querySelector('.header .flex .search-form');

    document.querySelector('#user-btn').onclick = () => {
        profile.classList.toggle('active');
        search.classList.remove('active');
    }


    // Event listeners for side bar functionality
    let sideBar = document.querySelector('.side-bar');

    document.querySelector('#menu-btn').onclick = () => {
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
    }

    document.querySelector('#close-btn').onclick = () => {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }

   // Event listener for CV download button
   document.getElementById('cv-btn').addEventListener('click', function() {
    var cvFilePath = '../images/devLeeCv.pdf';
    var encodedPath = encodeURI(cvFilePath);
    var link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'devLeeCv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
});
