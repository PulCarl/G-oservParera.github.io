<?php

    $idc= new PDO('pgsql:host=gfraw00008110; dbname=star_dt;','postgres','Postgre_gis');
    $sql = "SELECT  ST_ASgeoJSON(geom_2154) FROM view_regard_visitable_epsg2154";
    $prepare = $idc -> prepare($sql);
    $prepare -> execute();
    $resultat =  $prepare->fetchAll();

// foreach ($resultat as $value) {
//   $tab[] = $value;
// }


foreach ($resultat as $value) {
  echo $value["st_asgeojson"].',,'.$value["id_element_reseau"].',,'.$value["id_regard_visistable"].',,'.$value["departement"].',,'.$value["commune"].',,'.$value["code_insee"].',,'.$value["etiquette"].',,'.$value["detail_etiquette"].';;';
}


?>
