var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_2026_2 = new ol.format.GeoJSON();
var features_2026_2 = format_2026_2.readFeatures(json_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026_2.addFeatures(features_2026_2);
cluster_2026_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2026_2
});
var lyr_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2026_2, 
                style: style_2026_2,
                popuplayertitle: 'موافقات شهر يناير 2026',
                interactive: true,
                title: '<img src="styles/legend/2026_2.png" /> موافقات شهر يناير 2026'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_2026_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Positronlabelsonly_1,lyr_2026_2];
lyr_2026_2.set('fieldAliases', {'fid': 'fid', 'الشركة ': 'الشركة ', 'نوع الموافقة': 'نوع الموافقة', });
lyr_2026_2.set('fieldImages', {'fid': 'TextEdit', 'الشركة ': 'TextEdit', 'نوع الموافقة': 'TextEdit', });
lyr_2026_2.set('fieldLabels', {'fid': 'hidden field', 'الشركة ': 'inline label - visible with data', 'نوع الموافقة': 'inline label - visible with data', });
lyr_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});