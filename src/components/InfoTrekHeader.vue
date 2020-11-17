<template>
    <header>
        <div id="logo">
            <a href="/">
                <img src="../assets/logo-2.png" :alt="brand">
                <div class="associate">
                    <h1>{{brand}}</h1>
                    <span>{{slogan}}</span>
                </div>
            </a>
        </div>
        <div id="social">
            <div id="auth">
                <div v-if="isLoggedIn">
                    Welcome {{user.username}}<i class="fa fa-sign-out"></i> <a href="/sign-out">Log Out</a>
                </div>
                <div v-else><i class="fa fa-sign-in"></i><a href="/sign-in">Sign In</a> <i class="fa fa-user-plus"></i><a href="/sign-up">Sign Up</a></div>
            </div>
            <ul>
                <li v-for="item in socialItems" :key="item.index">
                    <a :href="item.url" :class="item.lower_name"><i :class="item.icon" :title="item.name"></i> </a>
                </li>
            </ul>
        </div>
    </header>
    <nav id="main">
        <ul>
            <li v-for="menuItem in menuItems" :key="menuItem.id">
                <router-link :to="menuItem.link">{{menuItem.title}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'InfoTrekHeader',
    props: {
        brand: {
            type: String,
            required: true
        },
        slogan: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            socialItems: [
                {
                    id: 1,
                    name: 'Facebook',
                    lower_name: 'facebook',
                    icon: 'fa fa-facebook-square',
                    url: 'https://facebook.com',
                },
                {
                    id: 2,
                    name: 'Twitter',
                    lower_name: 'twitter',
                    icon: 'fa fa-twitter-square',
                    url: 'https://twitter.com',
                },
                {
                    id: 3,
                    name: 'Instagram',
                    lower_name: 'instagram',
                    icon: 'fa fa-instagram',
                    url: 'https://instagram.com',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    lower_name: 'linkedin',
                    icon: 'fa fa-linkedin-square',
                    url: 'https://linkedin.com',
                }
            ],

            menuItems: [
                {
                    id: 1,
                    title: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    title: 'Destinations',
                    link: '/destinations'
                },
                {
                    id: 3,
                    title: 'Stories',
                    link: '/stories'
                },
                {
                    id: 4,
                    title: 'About',
                    link: '/about'
                },
                {
                    id: 5,
                    title: 'Contact',
                    link: '/contact'
                }
            ],

            isLoggedIn: true,

            user: {
                id: 1,
                username: 'emfluenceindia',
                first_name: 'Subrata',
                last_name: 'Sarkar',
                isAdmin: true,
            }
        }
    },
}
</script>

<style scoped>
    header {
        margin: 0;
        padding: 1rem;
        background: darkgreen;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid yellowgreen;
    }

    #logo {
        width: 25%;
    }

    #logo a {
        display: flex;
        justify-content: left;
        flex-wrap: nowrap;
        text-decoration: none;
    }

    #logo a img {
        max-width: 30%;
    }

    #logo a .associate {
        text-align: left;
        margin-left: 1rem;
    }

    #logo a .associate h1 {
        font-size: 30px;
        margin: 0 auto;
        color: whitesmoke;
        font-family: 'Fredoka One', cursive;
        text-transform: uppercase;
        font-weight: normal;
    }

    #logo a .associate span {
        color:white;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: .1rem;
    }

    /** social */
    #social ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #social ul li {
        display: inline-block;
        margin: 0 .5rem;
    }

    #social ul li:first-child {
        margin-left: 0;
    }

    #social ul li a i {
        font-size: 1.6rem;
        color: gainsboro;
    }

    #auth {
        text-align: center;
        color: gainsboro;
        margin: 0 0 1rem 0;
        text-transform: uppercase;
        font-size: 13px;
    }

    #auth a {
        color: gainsboro;
        text-decoration: none;
    }

    #auth a:hover {
        text-decoration: none;
        color: white;
    }

    #auth i {
        margin-left: 1rem;
        margin-right: .3rem;
    }

    #main {
        width: 100%;
        background: olivedrab;
        margin: 0 auto;
        padding: 1rem;
        box-sizing: border-box;
    }

    #main ul {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: left;
    }

    #main ul li {
        margin: 0 .5rem;
    }

    #main ul li a {
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-size: .9rem;
    }

    

    /*#social ul li a.facebook {
        color: #4267B2;
    }

    #social ul li a.twitter {
        color: #1DA1F2;
    }

    #social ul li a.linkedin {
        color: #2867B2;
    }

    #social ul li a.instagram {
        color: #C13584;
    }*/

</style>