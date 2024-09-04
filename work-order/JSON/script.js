function openTravel(evt, navigation) {
    var i, navcontent, tablinks;
    
    navcontent = document.getElementsByClassName('nav-content');

    for(i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab-links');

    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(navigation).style.display = 'block';
    evt.currentTarget.className += ' active';
}