require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapGallery, Search)  {
    esriConfig.apikey = "AAPK5d39fadff8224f5d87feee8b95f8dd47zjiGI7RDnGGoWnBfLw49XSwhiHQlBHaCblyCFdN1jVdDSt8HJM3rSHbqoYf1VUZH";

    const webmap = new WebMap({
        portalItem: {
            id: "232b4d297d054b2a831a3ce629ac8495"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webmap
    });

    const homeBtn = new Home({
        view: view
    })

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-left");

    const scalebar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "line"
    })

    view.ui.add(scalebar, "bottom-right");

    view.ui.add("basemap-btn", "top-right");
    view.ui.add("layerList-Btn", "top-right");

    
    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        }
    })

    view.ui.add(basemapGallery, "top-right");


    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
        .getElementById("layerList-Btn")
        .addEventListener("click", function () {
            toggleButton("layerList")
        })

    document
        .getElementById("basemap-btn")
        .addEventListener("click", function () {
            toggleButton("gallery");
        })

    const searchWidged = new Search({
        view: view
    })

    view.ui.add(searchWidged, "top-right");

    function toggleButton(item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;

        if (item == "layerList") {
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none");
        } else if (item == "gallery") {
            currentProp = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none");
        }
    }
})