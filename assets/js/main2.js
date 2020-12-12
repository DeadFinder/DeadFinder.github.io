$(function() {
    $('.control.seconds').after().click(function() {
        $("html, body").animate({
            scrollTop: $("header").height() + 7200
        }, "slow");
        $("span#Update-info").css({
            "font-size": "10px"
        }).delay(1000).queue(function() {
            $(this).css({
                "font-size": "0px"
            });
            $(this).dequeue();
        }).delay(500).queue(function() {
            $(this).css({
                "font-size": "10px"
            });
            $(this).dequeue();
        })
    });
    $('#Down').click(function() {
        $("html, body").animate({
            scrollTop: $("header").height() + 7200
        }, "slow");
        $("span#Update-info").css({
            "font-size": "10px"
        }).delay(1000).queue(function() {
            $(this).css({
                "font-size": "12px"
            });
            $(this).dequeue();
        }).delay(500).queue(function() {
            $(this).css({
                "font-size": "10px"
            });
            $(this).dequeue();
        })
    });
});

var container = document.getElementById('Three')
var vertexHeight = 15000,
    planeDefinition = 100,
    planeSize = 1245000,
    totalObjects = 1,
    background = "#222044",
    meshColor = "#393a61";
var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
camera.position.z = 10000;
camera.position.y = 10000;
var scene = new THREE.Scene();
scene.fog = new THREE.Fog(background, 1, 300000);
var planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
    color: meshColor,
    wireframe: true
}));
plane.rotation.x -= Math.PI * .5;
scene.add(plane);
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(background, 1);
container.appendChild(renderer.domElement);
updatePlane();

function updatePlane() {
    for (var i = 0; i < planeGeo.vertices.length; i++) {
        planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
        planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z
    }
};
render();
var count = 0

function render() {
    requestAnimationFrame(render);
    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
    camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
    camera.lookAt(new THREE.Vector3(0, 8000, 0))
    for (var i = 0; i < planeGeo.vertices.length; i++) {
        var z = +planeGeo.vertices[i].z;
        planeGeo.vertices[i].z = Math.sin((i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ * 0.6))
        plane.geometry.verticesNeedUpdate = true;
        count += 0.1
    }
    renderer.render(scene, camera);
}

function handleAnimations() {
    let animations = [
          ["heartBeat", "heartBeat"],
    ];

    var num = getRandomInt(animations.length);

    animateCSS('[name="top"]', animations[num][0], animationOver);
    animateCSS('[name="bottom"]', animations[num][1], animationOver);
    console.log("top: " + animations[num][0]);
    console.log("bottom: " + animations[num][1]);
}

function addStuff() {
    at("main").innerHTML =
    `<h1 name="top"    id = "status_text" class="header animated"><a href="https://vk.com/deadfinder">DeadFinder</a></h1>
    <p  name="bottom" id = "text2" class="textiboi animated">I'm just goodless man :)</p>
        <div class="textiboi">
        <a id="typElement"></a></div>
        <div class="textiboi">
        <a class="textiboi animated fadeIn" href="https://ezcheats.ru/profile/DeadFinder/">EZcheats</a>
        <a class="textiboi animated fadeIn" href="https://discord.gg/QdeeGDgQfT">My Discord server</a>
        <a class="textiboi animated fadeIn" href="https://steamcommunity.com/id/deadfinder/"></a>
        <div class="textiboi">`
    handleAnimations();
}

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    node.classList.add('delay-2s')

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var at = document.getElementById.bind(document);
window.addEventListener("DOMContentLoaded", () => {
    at("status_text").innerHTML = "";

});

window.addEventListener("load", () => {
    setTimeout(() => {
        if (!window.music.paused) {
            addStuff();
            console.log("music is playing");
            return;
        }
        at("status_text").innerHTML = "click to enter";
        at("status_text").classList.add("begin");

    }, 100);
});

var temp = 0

function animationOver() {
    temp++;

    if (temp != 2)
        return;

    setTimeout(function() {
        console.log("animations over");
        var doc = document.getElementById("main");
        var inner = doc.innerHTML;
        // WOW this is aids.

        doc.innerHTML +=
            `<div class="textiboi">
        <a id="typElement"></a></div>
        <div class="textiboi">
        <a class="textiboi animated fadeIn" href="https://github.com/clangremlini/fet-loader">Source code</a>
        <a class="textiboi animated fadeIn" href="https://github.com/clangremlini/fet-loader/releases/latest">Download latest release</a>
        <a class="textiboi animated fadeIn" href="https://t.me/ayeloader">TG Channel</a>
        <div class="textiboi">
        <a class="textiboi animated fadeIn" href="https://bit.ly/36KENnu">Donate</a>`;

    }, 550);

}