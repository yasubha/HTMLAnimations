var index = 0;

    function colorchange() {
        var colors = ["red","green", "pink","yellow", "orange", "purple"]
        document.getElementsByTagName("body")[0].
        style.background = colors[index++];

        if (index > colors.length - 1)
         index = 0;
    }