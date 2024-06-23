ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([97.067316, 1.458817, 107.374567, 8.268782]);
var wms_layers = [];

var format_CASESHIV2010_0 = new ol.format.GeoJSON();
var features_CASESHIV2010_0 = format_CASESHIV2010_0.readFeatures(json_CASESHIV2010_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CASESHIV2010_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASESHIV2010_0.addFeatures(features_CASESHIV2010_0);
var lyr_CASESHIV2010_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASESHIV2010_0, 
                style: style_CASESHIV2010_0,
                popuplayertitle: "CASES HIV 2010",
                interactive: true,
    title: 'CASES HIV 2010<br />\
    <img src="styles/legend/CASESHIV2010_0_0.png" /> 0 - 14<br />\
    <img src="styles/legend/CASESHIV2010_0_1.png" /> 14 - 147<br />\
    <img src="styles/legend/CASESHIV2010_0_2.png" /> 147 - 360<br />\
    <img src="styles/legend/CASESHIV2010_0_3.png" /> 360 - 536<br />'
        });

lyr_CASESHIV2010_0.setVisible(true);
var layersList = [lyr_CASESHIV2010_0];
lyr_CASESHIV2010_0.set('fieldAliases', {'source': 'source', 'id': 'id', 'name': 'name', '2010 HIV': '2010 HIV', 'id_2': 'id_2', '2010': '2010', '2010_1': '2010_1', 'TOTAL HIV CASES': 'TOTAL HIV CASES', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_CASESHIV2010_0.set('fieldImages', {'source': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', '2010 HIV': 'Range', 'id_2': 'TextEdit', '2010': 'Range', '2010_1': 'Range', 'TOTAL HIV CASES': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_CASESHIV2010_0.set('fieldLabels', {'source': 'no label', 'id': 'no label', 'name': 'no label', '2010 HIV': 'no label', 'id_2': 'no label', '2010': 'no label', '2010_1': 'no label', 'TOTAL HIV CASES': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_CASESHIV2010_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});