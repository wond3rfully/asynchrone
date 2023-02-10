    function delay() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Promise done");
                }, 5000);
            });
        }
        //console.log(delay());

        delay().then((data) => {
            console.log(data);
        })
        /* 
                fetch("https://pokeapi.co/api/v2/pokemon").then(data=>{
                    return data.json();
                }).then(data=>{
                    console.log(data);
                })  */


        fetch("https://pokeapi.co/api/v2/pokemon").then(data => {
            return data.json();
        }).then(data => {

            console.log(data)

            for (var i = 0; i < data.results.length; i++) {
                const $div = document.createElement("div");
                document.body.append($div)
                const $link = document.createElement("a");
                $div.append($link)
                const show = data.results[i].name
                console.log(data.results[i].url)
                $link.textContent = show
                const idReturn = data.results[i].url.match(/\/(\d+)\/$/)[1]
                $link.href = "/detail.html?id=" + idReturn


            }

            
        }



        )




    