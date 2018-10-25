(function () {
    var banner = document.getElementById('banner');
    var ul = banner.children[0].children[0]

    function task(){
        var img = banner.children[1].querySelector('.show');
        var btn = banner.children[0].querySelector('.on')
        img.className='';
        btn.className='';
        var next=img.nextElementSibling;
        var nextBtn=btn.nextElementSibling;
        if(next!=null){
            //console.log(next)
            next.className = 'show'
            nextBtn.className = 'on'
        }else{
            img.parentNode.children[0].className = 'show'
            //console.log(nextBtn)
            btn.parentNode.children[0].className = 'on'
        }
    }

    var timer = setInterval(task,4000)

    ul.onmouseover = function (e) {
        var liBtn = e.target;
        if(liBtn.nodeName.toLowerCase() == 'a'){
            var index=[].indexOf.call(liBtn.parentNode.parentNode.querySelectorAll(liBtn.parentNode.tagName),liBtn.parentNode)
            //console.log(index)
            var li=ul.querySelector(".on")
            var img = banner.children[1].querySelector(".show")
            li.className='';
            liBtn.parentNode.className = "on"
            img.className='';
            banner.children[1].children[index].className = 'show'
            clearInterval(timer)
        }
    }
    ul.onmouseleave = function (e) {
        //console.log(e.target)
        timer = setInterval(task,4000)
    }
})();


(function () {
    var floorTabs=document.querySelectorAll('.floor_main>.index_recommend>.floor_head>.floor_tab')
    for(var i=0; i<floorTabs.length; i++){
        floorTabs[i].onmouseover = function (e) {
            var floorTab = e.target;
            var floorTabPar = floorTab.parentNode;
            //var floorTabCon = floorTabs[i].querySelector('dl>dd')
            //console.log(floorTab.parentNode.nodeName)
            if(floorTabPar.nodeName.toLowerCase() == 'dt'){
                var floorTabOn = floorTab.parentNode.parentNode.parentNode.querySelector('dt.on')
                floorTabOn.className = '';
                floorTabPar.className = 'on'
                floorTabPar.nextElementSibling.style.display = 'block'
                floorTabPar.parentNode.s
            }
        }
    }

})();


