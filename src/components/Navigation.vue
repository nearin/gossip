<template>
    <nav>
        <div class="logo">
            <router-link to="/">gossip</router-link>
        </div>
        <div class="search">
             <input></input>
        </div>
        <div class="navigation">
            <router-link to="/pin">Pin</router-link>
            <router-link to="/add">Add</router-link>
            <router-link to="/menu">Menu</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navigation'
    }

</script>

<style lang="scss">

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        nav {
            flex-direction: column;
        }
        .search {
            width: 100%;
        }
        .navigation {
            width: 100%;
        }

    }

    a:visited {
        text-decoration: none;
    }

    .logo {
        font-family: 'Pacifico', cursive;
        font-size: 3rem;
        margin-left: 1rem;
        margin-top: -0.5rem;
        margin-bottom: 0.5rem;

        & a, a:visited {
            font-weight: 500;
            color: #0b2d41;
        }

        & a:hover {
            text-decoration: none;
            border-bottom: 5px solid #0b2d41;
        }
    }

    .search {
        padding: 0rem 1rem 0rem 1rem;
        flex-grow: 2;
        text-align: center;
        input {
            width: 70%;
            border: 0;
            border: 3px solid #134c6c;
            border-bottom: 3px solid #2288c3;
            background-color: #134c6c;
            color: #93cbec;
            font-weigt: 500;
            font-size: 1.3rem;
            padding: 0.2rem;
        }

        input:focus {
            border-left: 3px solid #0b2d41;
            border-top: 3px solid #0b2d41;
            border-right: 3px solid #0b2d41;
        }
    } 

    .navigation {
        text-align: right;
        font-size: 1.2rem;
        font-weight: 700;

        & a {
            color: #2288c3;
            font-weight: 700;
            margin: 1rem;
        }

        a:hover {
            text-decoration: none;
            border-bottom: 5px solid #2288c3;
        }

    }

    
</style>