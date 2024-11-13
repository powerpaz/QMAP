var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 0.688000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_EstablecimientosEducativos_1 = new ol.format.GeoJSON();
var features_EstablecimientosEducativos_1 = format_EstablecimientosEducativos_1.readFeatures(json_EstablecimientosEducativos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstablecimientosEducativos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstablecimientosEducativos_1.addFeatures(features_EstablecimientosEducativos_1);
var lyr_EstablecimientosEducativos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstablecimientosEducativos_1, 
                style: style_EstablecimientosEducativos_1,
                popuplayertitle: "Establecimientos Educativos",
                interactive: true,
                title: '<img src="styles/legend/EstablecimientosEducativos_1.png" /> Establecimientos Educativos'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_EstablecimientosEducativos_1.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_EstablecimientosEducativos_1];
lyr_EstablecimientosEducativos_1.set('fieldAliases', {'COD_AMIE': 'COD_AMIE', 'NOM_INSTIT': 'NOM_INSTIT', 'MATRIZ_O_E': 'MATRIZ_O_E', 'AMIE_MATRI': 'AMIE_MATRI', 'X': 'X', 'Y': 'Y', 'Zona': 'Zona', 'NOM_ESTADO': 'NOM_ESTADO', 'NOM_SOSTEN': 'NOM_SOSTEN', 'REGIMEN': 'REGIMEN', 'NOM_DISTRI': 'NOM_DISTRI', 'COD_AD_DIS': 'COD_AD_DIS', 'COD_AD_D_1': 'COD_AD_D_1', 'COD_AD_D_2': 'COD_AD_D_2', 'COD_AD_CIR': 'COD_AD_CIR', 'NOM_PARROQ': 'NOM_PARROQ', 'NOM_PROVIN': 'NOM_PROVIN', 'COD_DPA_CA': 'COD_DPA_CA', 'NOM_CANTON': 'NOM_CANTON', 'COD_DPA_PA': 'COD_DPA_PA', });
lyr_EstablecimientosEducativos_1.set('fieldImages', {'COD_AMIE': 'TextEdit', 'NOM_INSTIT': 'TextEdit', 'MATRIZ_O_E': 'TextEdit', 'AMIE_MATRI': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Zona': 'TextEdit', 'NOM_ESTADO': 'TextEdit', 'NOM_SOSTEN': 'TextEdit', 'REGIMEN': 'TextEdit', 'NOM_DISTRI': 'TextEdit', 'COD_AD_DIS': 'TextEdit', 'COD_AD_D_1': 'TextEdit', 'COD_AD_D_2': 'TextEdit', 'COD_AD_CIR': 'TextEdit', 'NOM_PARROQ': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'COD_DPA_CA': 'TextEdit', 'NOM_CANTON': 'TextEdit', 'COD_DPA_PA': 'TextEdit', });
lyr_EstablecimientosEducativos_1.set('fieldLabels', {'COD_AMIE': 'inline label - always visible', 'NOM_INSTIT': 'inline label - always visible', 'MATRIZ_O_E': 'inline label - always visible', 'AMIE_MATRI': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Zona': 'inline label - always visible', 'NOM_ESTADO': 'inline label - always visible', 'NOM_SOSTEN': 'inline label - always visible', 'REGIMEN': 'inline label - always visible', 'NOM_DISTRI': 'inline label - always visible', 'COD_AD_DIS': 'inline label - always visible', 'COD_AD_D_1': 'inline label - always visible', 'COD_AD_D_2': 'inline label - always visible', 'COD_AD_CIR': 'inline label - always visible', 'NOM_PARROQ': 'inline label - always visible', 'NOM_PROVIN': 'inline label - always visible', 'COD_DPA_CA': 'inline label - always visible', 'NOM_CANTON': 'inline label - always visible', 'COD_DPA_PA': 'inline label - always visible', });
lyr_EstablecimientosEducativos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});