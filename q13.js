

    

        const numbers = [50,70,20,59,18,99,67];
        document.getElementById("q13a").innerHTML =arrayMax(numbers);
        document.getElementById("q13b").innerHTML =arrayMin(numbers);

        function arrayMax(arr) {
          return Math.max.apply(null,arr);
        }

        function arrayMin(arr) {
          return Math.min.apply(null,arr);
        }
