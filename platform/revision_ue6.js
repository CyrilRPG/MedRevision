const REVISION_UE6 = {
  "HEMATOLOGIE": {
    name: "Hématologie",
    sections: [
      {
        title: "L'hémogramme normal et pathologique",
        content: `<h3>Le tissu sanguin</h3>
<ul>
<li><strong>Hématologie</strong> : étude de la physiologie du tissu sanguin et des maladies du sang</li>
<li><strong>Tissu sanguin</strong> : tissu mésenchymateux, fluide, dérivé du mésoderme, volume environ <strong>5 L</strong> soit 7-8% de la masse corporelle</li>
<li><strong>Fraction liquide (55%)</strong> : le plasma (sang anticoagulé) ou le sérum (sans anticoagulant = plasma sans facteurs de coagulation ni fibrinogène)</li>
<li><strong>Fraction cellulaire (45%)</strong> : éléments figures du sang en suspension dans le plasma</li>
<li>Séparation des fractions par <strong>sédimentation</strong> ou <strong>centrifugation</strong></li>
<li>Prélèvement sur <strong>tube EDTA</strong> (bouchon violet) pour la NFS ; tube citrate pour vérifier une thrombopénie ; tube sec pour le sérum</li>
<li><strong>Plasma</strong> = fraction liquide du sang anticoagulé (contient les facteurs de coagulation)</li>
<li><strong>Sérum</strong> = fraction liquide du sang non anticoagulé (= plasma SANS facteurs de coagulation ni fibrinogène)</li>
<li>Plasma et sérum contiennent : eau, électrolytes, sels minéraux, glucose, gaz dissous, lipides, protéines</li>
</ul>

<h3>Les éléments figures du sang</h3>
<ul>
<li><strong>Hématies (GR)</strong> : transport O2 (hémoglobine) et CO2, durée de vie <strong>120 jours</strong></li>
<li><strong>Plaquettes (thrombocytes)</strong> : hémostase primaire, formation du clou plaquettaire, durée de vie <strong>7-10 jours</strong></li>
<li><strong>Leucocytes (GB)</strong> : défenses immunitaires, durée de vie variable (environ 1 jour pour PNN)
  <ul>
  <li><strong>Polynucléaires</strong> : neutrophiles (~70%), éosinophiles (~1%), basophiles (~1%)</li>
  <li><strong>Mononucléaires</strong> : lymphocytes (~20%), monocytes (~5%)</li>
  </ul>
</li>
<li>Cellules physiologiques retrouvées chez un individu en bonne santé</li>
<li>Seules les cellules matures circulent normalement dans le sang</li>
</ul>

<h3>Hématopoiese</h3>
<ul>
<li>Toutes les cellules sanguines proviennent d'une <strong>cellule souche hématopoietique (CSH)</strong> commune</li>
<li>CSH possède 2 propriétés : <strong>auto-renouvellement</strong> et <strong>différenciation</strong></li>
<li>CSH donne une cellule multipotente qui génère des <strong>progéniteurs myéloïdes</strong> (GR, plaquettes, PNN, monocytes, éosinophiles, basophiles) et <strong>progéniteurs lymphoïdes</strong> (lymphocytes B et T)</li>
<li>Les précurseurs se trouvent dans la <strong>moelle osseuse</strong> ; seules les cellules matures circulent dans le sang</li>
<li>Présence de cellules immatures dans le sang = <strong>pathologique</strong> (a explorer)</li>
</ul>

<h3>Hémogramme normal (NFS)</h3>
<ul>
<li><strong>Définition</strong> : analyse quantitative (automate) et qualitative (frottis sanguin au MGG) des éléments figures</li>
<li>Prélèvement sur <strong>tube EDTA</strong> (bouchon violet) ; conservation max <strong>24h</strong> (automate) et <strong>6h</strong> (frottis)</li>
<li>Valeurs varient selon <strong>âge, sexe, origine ethnique</strong></li>
<li><strong>Frottis sanguin</strong> : goutte de sang étalée sur lame, colorée au <strong>MGG (May Grunwald Giemsa)</strong>, analysée au microscope</li>
<li>Si valeurs anormales : examen du frottis sanguin en priorité, puis corrélation clinique et examens complémentaires</li>
</ul>

<h3>Parametres érythrocytaires</h3>
<ul>
<li><strong>Nombre de GR</strong> : exprimé en T/L (homme > femme)
  <ul>
  <li>Homme : 4,5-5,5 T/L</li>
  <li>Femme : 4-5 T/L</li>
  </ul>
</li>
<li><strong>Hématocrite (Ht)</strong> : volume relatif des GR dans le plasma (%)
  <ul>
  <li>Homme : <strong>40-54%</strong></li>
  <li>Femme : <strong>37-47%</strong></li>
  </ul>
</li>
<li><strong>Hémoglobine (Hb)</strong> : parametre le plus important, définit l'anémie
  <ul>
  <li>Homme : <strong>13-17 g/dL</strong> (130-170 g/L)</li>
  <li>Femme : <strong>12-16 g/dL</strong> (120-160 g/L)</li>
  <li>Nouveau-ne : 14-23 g/dL (polyglobulie physiologique)</li>
  </ul>
</li>
<li><strong>VGM</strong> (Volume Globulaire Moyen) = Ht / Nb GR
  <ul>
  <li>Normal : <strong>80-100 fL</strong> (1 fL = 10^-15 L)</li>
  <li>Microcytose : VGM &lt; 80 fL</li>
  <li>Macrocytose : VGM &gt; 100 fL</li>
  </ul>
</li>
<li><strong>CCMH</strong> (Concentration Corpusculaire Moyenne en Hb) = Hb/Ht
  <ul>
  <li>Normal : <strong>32-36%</strong></li>
  <li>Hypochromie : CCMH &lt; 32%</li>
  <li>L'hyperchromie n'existe pas</li>
  </ul>
</li>
<li><strong>TCMH</strong> (Teneur Corpusculaire Moyenne en Hb) = Hb / Nb GR
  <ul>
  <li>Normal : <strong>27-32 pg/GR</strong></li>
  <li>Hypochromie : TCMH &lt; 27 pg</li>
  <li>TCMH depend beaucoup du VGM</li>
  </ul>
</li>
</ul>

<h3>Anomalies morphologiques des GR (frottis sanguin)</h3>
<ul>
<li><strong>Anisocytose</strong> : variation de taille des GR</li>
<li><strong>Poikilocytose</strong> : variation de formée (ovalaire, en goutte, falciforme, etc.)</li>
<li><strong>Polychromatophilie</strong> : variation de couleur (GR plus bleu = réticulocytes)</li>
<li><strong>Schizocytes</strong> : fragments de GR (triangulaires, irréguliers) - signe de microangiopathie thrombotique</li>
<li><strong>Sphérocytes</strong> : GR sphériques (perte de la formée biconcave)</li>
<li><strong>Drépanocytes</strong> : GR en faucille (drépanocytose)</li>
<li><strong>Rouleaux</strong> : empilement de GR (myélome, inflammation)</li>
</ul>

<h3>Réticulocytes</h3>
<ul>
<li><strong>Définition</strong> : GR immatures (jeunes), contiennent encore de l'ARN, représentent ~1% des GR</li>
<li>Coloration au <strong>bleu de cresyl</strong> (marqué l'ARN) - ne se voient pas au MGG</li>
<li>Valeur normale : <strong>25-100 G/L</strong></li>
<li>Ne font pas partie systematiquement de l'hémogramme, demandes <strong>en cas d'anémie</strong></li>
<li>Seuil de <strong>120 G/L</strong> en cas d'anémie :
  <ul>
  <li><strong>Arégénérative</strong> : réticulocytes &lt; 120 G/L (cause <strong>centrale</strong>, moelle osseuse)</li>
  <li><strong>Régénérative</strong> : réticulocytes &gt; 120 G/L (cause <strong>périphérique</strong>, dans le sang)</li>
  </ul>
</li>
<li>Les réticulocytes sont plus gros que les GR matures, ce qui peut augmenter le VGM</li>
</ul>

<h3>Leucocytes et plaquettes - Valeurs normales</h3>
<ul>
<li><strong>Leucocytes totaux</strong> : <strong>4-10 G/L</strong> (toujours interpréter en valeurs absolues, JAMAIS en %)</li>
<li><strong>PNN</strong> : 1,5-7 G/L</li>
<li><strong>Lymphocytes</strong> : 1-4 G/L</li>
<li><strong>Monocytes</strong> : 0,1-1 G/L</li>
<li><strong>Éosinophiles</strong> : &lt; 0,5 G/L</li>
<li><strong>Basophiles</strong> : &lt; 0,05 G/L</li>
<li><strong>Plaquettes</strong> : <strong>150-400 G/L</strong>
  <ul>
  <li>Thrombocytose : &gt; 450 G/L</li>
  <li>Thrombopénie : &lt; 150 G/L</li>
  </ul>
</li>
</ul>

<h3>Particularites de l'hémogramme</h3>
<ul>
<li><strong>Nouveau-ne</strong> : polyglobulie physiologique (Hb 14-23 g/dL, GR 5-6 T/L), hyperleucocytose possible (GB 9-30 G/L)</li>
<li><strong>Enfant &lt; 6 ans</strong> : microcytose possible (VGM jusqu'a 70 fL), <strong>lymphocytose physiologique</strong> jusqu'a 10-12 ans, thrombocytose possible (jusqu'a 600 G/L entre 15 jours et 6 mois)</li>
<li><strong>Grossesse</strong> : baisse Hb (hémodilution + besoins en fer accrus), polynucléose physiologique, thrombopénie inconstante (&gt; 100 G/L considéré normal)</li>
<li><strong>Sujet d'origine africaine</strong> : neutropénie ethnique possible (PNN &gt; 1 G/L, sans consequence pathologique)</li>
</ul>

<h3>Hémogramme pathologique - Augmentation des cellules</h3>
<ul>
<li>2 mécanismes : augmentation de cellules matures (hyperproduction adaptée) ou de cellules immatures (trouble de maturation, SMP)</li>
<li><strong>Polyglobulie</strong> : Hb &gt; 16 g/dL (femme) ou &gt; 17 g/dL (homme), Ht &gt; 55% (F) ou &gt; 60% (H)
  <ul>
  <li>Éliminer hémoconcentration (déshydratation, brûlures, diurétiques)</li>
  <li>EPO augmentée adaptée : hypoxie chronique (BPCO, altitude, cardiopathie cyanogène)</li>
  <li>EPO augmentée inadaptée : production tumorale (rein, foie, cervelet)</li>
  <li>EPO basse : syndrome myéloprolifératif (<strong>maladie de Vaquez</strong>, mutation JAK2)</li>
  </ul>
</li>
<li><strong>Polynucleose neutrophile</strong> : PNN &gt; 7 G/L (infections bactériennes, inflammations, stress, corticoides, tabac, SMP)</li>
<li><strong>Myélémie</strong> : passage de précurseurs granuleux dans le sang (metamyélocytes, myélocytes) - toujours pathologique chez l'adulte sauf grossesse</li>
<li><strong>Érythroblastose</strong> : présence d'érythroblastes dans le sang - toujours pathologique</li>
<li><strong>Monocytose</strong> : monocytes &gt; 1 G/L (infections, maladies inflammatoires, LMMC si &gt; 1 G/L persistant)</li>
<li><strong>Hyperéosinophilie</strong> : PNE &gt; 0,5 G/L (allergies, parasitoses, médicaments, syndromes hyperéosinophiliques)</li>
<li><strong>Lymphocytose</strong> : lymphocytes &gt; 4 G/L (infections virales chez l'enfant/adulte jeune, LLC chez le sujet âgé)</li>
</ul>

<h3>Hémogramme pathologique - Diminution des cellules (cytopénies)</h3>
<ul>
<li><strong>Anémie</strong> : Hb &lt; 13 g/dL (homme), &lt; 12 g/dL (femme), &lt; 10,5 g/dL (grossesse 3e trimestre)</li>
<li><strong>Neutropénie</strong> : PNN &lt; 1,5 G/L ; <strong>agranulocytose</strong> : PNN &lt; 0,5 G/L (risque infectieux majeur)</li>
<li><strong>Lymphopénie</strong> : lymphocytes &lt; 1 G/L (VIH, corticoides, immunosuppresseurs, lymphomes)</li>
<li><strong>Thrombopénie</strong> : plaquettes &lt; 150 G/L</li>
<li><strong>Bicytopénie</strong> : diminution de 2 lignées ; <strong>Pancytopénie</strong> : diminution simultanée des 3 lignées (aplasie médullaire, envahissement médullaire, carences B12/B9)</li>
<li>Origine <strong>centrale</strong> (production insuffisante, moelle) ou <strong>périphérique</strong> (destruction/consommation excessive)</li>
<li>Distinction par le <strong>myélogramme</strong> : moelle pauvre = central ; moelle riche = périphérique</li>
</ul>

<h3>Situations d'urgence hématologiques</h3>
<ul>
<li><strong>Anémie sévère</strong> : Hb &lt; 6 g/dL ou mal tolérée, risque d'hypoxie, transfusion urgente</li>
<li><strong>Polyglobulie</strong> : Ht &gt; 60%, risque d'hyperviscosité et thrombose</li>
<li><strong>Neutropénie sévère</strong> : PNN &lt; 0,5 G/L, risque infectieux majeur (urgence si fièvre = aplasie fébrile)</li>
<li><strong>Hyperleucocytose importante</strong> : &gt; 20 G/L, infection grave ou hémopathie maligne a évoquer</li>
<li><strong>Thrombopénie sévère</strong> : plaquettes &lt; 20 G/L, risque hémorragique, transfusion plaquettaire urgente</li>
<li><strong>Blastes circulants</strong> : présence de cellules immatures sur le frottis = suspicion de leucémie aiguë = URGENCE</li>
</ul>`
      },
      {
        title: "Érythropoiese et Mégacaryocytopoïèse",
        content: `<h3>Hématopoiese - Rappels</h3>
<ul>
<li><strong>Définition</strong> : ensemble des phénomènes de fabrication et de remplacement continu et régulé des cellules sanguines</li>
<li>Processus <strong>continu</strong> (durée de vie courte des cellules) et <strong>regule</strong> (eviter les syndromes prolifératifs)</li>
<li>Localisation : <strong>moelle osseuse</strong> chez l'adulte (os plats : sternum, bassin, cotes, vertebres)</li>
<li>Durée de vie : GR ~120 j, plaquettes ~7 j, GB ~1 j</li>
<li>Chez le foetus : sac vitellin (premières semaines), puis foie et rate, puis moelle osseuse a partir du 5e mois</li>
</ul>

<h3>Érythropoiese - Définition et lignée</h3>
<ul>
<li><strong>Définition</strong> : processus de production des globules rouges, du progéniteur au réticulocyte puis GR mature</li>
<li><strong>Lieu</strong> : moelle osseuse (foie et rate chez le foetus)</li>
<li>Lignée : CSH &rarr; progéniteur myéloïde &rarr; <strong>BFU-E</strong> &rarr; <strong>CFU-E</strong> &rarr; <strong>proerythroblaste</strong> &rarr; érythroblaste basophile &rarr; érythroblaste polychromatophile &rarr; érythroblaste acidophile &rarr; <strong>réticulocyte</strong> &rarr; GR</li>
<li><strong>Maturation</strong> : condensation progressive du noyau, expulsion du noyau (enucleation), accumulation d'hémoglobine</li>
<li>Production journaliere : environ <strong>200 milliards de GR/jour</strong></li>
<li>Divisions cellulaires cessent au stade d'érythroblaste acidophile</li>
<li>Réticulocyte reste immature 1-2 jours dans le sang avant de devenir un GR mature</li>
</ul>

<h3>Régulation de l'érythropoiese</h3>
<ul>
<li><strong>Érythropoïétine (EPO)</strong> : hormone glycoprotéique produite par le <strong>rein</strong> (90%) en réponse a l'hypoxie tissulaire</li>
<li>EPO se fixe sur les récepteurs des progéniteurs et précurseurs érythroides (BFU-E tardifs et CFU-E)</li>
<li>Stimule la prolifération et la différenciation des progéniteurs érythroides</li>
<li>Inhibe l'apoptose des érythroblastes</li>
<li><strong>Boucle de rétrocontrôle</strong> : hypoxie &rarr; EPO augmenté &rarr; production GR augmenté &rarr; correction de l'hypoxie &rarr; EPO diminué</li>
<li>Autres facteurs : SCF (Stem Cell Factor), IL-3, GM-CSF</li>
</ul>

<h3>Facteurs exogenes nécessaires a l'érythropoiese</h3>
<ul>
<li><strong>Fer</strong> : indispensable a la synthèse de l'heme
  <ul>
  <li>Stock total : <strong>3-5 g</strong> (2/3 dans l'Hb, 1/3 de réserve sous formée de ferritine)</li>
  <li>Absorption <strong>duodenale</strong> : 1-2 mg/j (fer heminique mieux absorbe que non heminique)</li>
  <li>Transport : <strong>transferrine</strong> (2 sites de fixation du fer)</li>
  <li>Stockage : <strong>ferritine</strong> (reflet des réserves en fer = meilleur marqueur)</li>
  <li>Régulation : <strong>hepcidine</strong> (hormone hépatique)
    <ul>
    <li>Hepcidine augmentée (inflammation, surcharge en fer) &rarr; bloque l'absorption et le relargage du fer des macrophages</li>
    <li>Hepcidine diminuée (carence en fer, hypoxie, érythropoiese accrue) &rarr; augmenté l'absorption</li>
    </ul>
  </li>
  <li>Pertes : desquamation intestinale, règles chez la femme (pas de mécanisme actif d'excrétion)</li>
  </ul>
</li>
<li><strong>Vitamine B12 (cobalamine)</strong> : cofacteur de la synthèse de l'ADN
  <ul>
  <li>Apport alimentaire (produits animaux exclusivement), réserves pour <strong>3-4 ans</strong></li>
  <li>Absorption iléale nécessitant le <strong>facteur intrinsèque</strong> (sécrète par les cellules pariétales de l'estomac)</li>
  <li>Stockage hépatique</li>
  </ul>
</li>
<li><strong>Vitamine B9 (acide folique)</strong> : cofacteur de la synthèse de l'ADN
  <ul>
  <li>Apport alimentaire (legumes verts, foie, levures), réserves pour <strong>3-4 mois</strong> seulement</li>
  <li>Absorption jejunale</li>
  </ul>
</li>
</ul>

<h3>Structure de l'hémoglobine</h3>
<ul>
<li>Tetramere : 2 chaînes alpha + 2 chaînes beta (pour HbA adulte)</li>
<li>Chaque chaîne de globine est associée a 1 molecule d'<strong>heme</strong> (= fer ferreux Fe2+ + protoporphyrine IX)</li>
<li>L'heme fixe l'O2 de maniere reversible</li>
<li><strong>HbA</strong> (alpha2beta2) : majoritaire chez l'adulte (~97%)</li>
<li><strong>HbA2</strong> (alpha2delta2) : minoritaire (&lt; 3,5%)</li>
<li><strong>HbF</strong> (alpha2gamma2) : foetale, majoritaire in utero, &lt; 1% chez l'adulte</li>
</ul>

<h3>Dysfonctionnements de l'érythropoiese</h3>
<ul>
<li><strong>Déficit en EPO</strong> : insuffisance rénale chronique &rarr; anémie normocytaire arégénérative</li>
<li><strong>Carence en fer</strong> : anémie microcytaire hypochrome</li>
<li><strong>Carence B12/B9</strong> : anémie macrocytaire mégaloblastique (défaut de synthèse d'ADN)</li>
<li><strong>Exces d'EPO</strong> : polyglobulie (appropriée si hypoxie, inappropriée si tumorale)</li>
<li><strong>Anomalie de l'hémoglobine</strong> : thalassémies, drépanocytose</li>
</ul>

<h3>Mégacaryocytopoïèse</h3>
<ul>
<li><strong>Définition</strong> : processus de production des plaquettes a partir des mégacaryocytes</li>
<li>Lignée : CSH &rarr; progéniteur myéloïde &rarr; CFU-MK &rarr; mégacaryoblaste &rarr; mégacaryocyte basophile &rarr; mégacaryocyte granuleux &rarr; mégacaryocyte thrombocytogène &rarr; <strong>plaquettes</strong></li>
<li><strong>Particularite unique</strong> : <strong>endomitose</strong> (replication de l'ADN sans division cellulaire) &rarr; cellule geante polyploide (jusqu'a 64N, parfois 128N)</li>
<li>Le mégacaryocyte est la <strong>plus grande cellule de la moelle</strong> (50-100 microns)</li>
<li>Un mégacaryocyte produit <strong>1000 a 5000 plaquettes</strong> par fragmentation cytoplasmique</li>
<li>Les proplaquettes se fragmentent dans la circulation pour donner les plaquettes</li>
</ul>

<h3>Thrombopoïétine (TPO)</h3>
<ul>
<li>Principale cytokine de régulation de la mégacaryocytopoïèse</li>
<li>Produite par le <strong>foie</strong> de façon constitutive</li>
<li>Stimule prolifération et maturation des mégacaryocytes</li>
<li>Régulée par le nombre de plaquettes circulantes : les plaquettes fixent et dégradént la TPO &rarr; <strong>rétrocontrôle négatif</strong></li>
<li>Quand plaquettes diminuent &rarr; moins de dégradation de TPO &rarr; TPO augmenté &rarr; stimulation de la production</li>
<li>Récepteur de la TPO = <strong>c-MPL</strong></li>
</ul>

<h3>Plaquettes - Caractéristiques</h3>
<ul>
<li>Fragments cytoplasmiques anucles, <strong>2-4 microns</strong> de diametre</li>
<li>Durée de vie : <strong>7-10 jours</strong></li>
<li>Valeur normale : <strong>150-400 G/L</strong></li>
<li><strong>1/3 des plaquettes</strong> séquestrées dans la rate (pool splénique)</li>
<li>Contiennent des <strong>granules alpha</strong> (facteur von Willebrand, fibrinogène, facteur V, PDGF) et <strong>granules denses</strong> (ADP, ATP, sérotonine, calcium)</li>
<li>Rôle principal : <strong>hémostase primaire</strong> (adhesion, activation, agregation)</li>
</ul>

<h3>Pathologies de la mégacaryocytopoïèse</h3>
<ul>
<li><strong>Thrombopénie</strong> (&lt; 150 G/L) : centrale (défaut de production) ou périphérique (destruction/consommation/séquestration)</li>
<li><strong>Thrombocytose</strong> (&gt; 450 G/L) : réactionnelle (infection, inflammation, carence en fer, splenectomie) ou primitive (SMP : thrombocytémie essentielle)</li>
<li>Thrombocytose réactionnelle : pas de risque thrombotique accru, transitoire</li>
<li>Thrombocytémie essentielle : mutations JAK2/CALR/MPL, risque thrombotique et hémorragique</li>
</ul>`
      },
      {
        title: "Anémies microcytaires",
        content: `<h3>Rappels sur l'anémie</h3>
<ul>
<li><strong>Anémie</strong> : diminution du taux d'hémoglobine en dessous des valeurs normales
  <ul>
  <li>Homme : Hb &lt; <strong>13 g/dL</strong> (130 g/L)</li>
  <li>Femme : Hb &lt; <strong>12 g/dL</strong> (120 g/L)</li>
  <li>Femme enceinte T1/T2 : Hb &lt; <strong>11 g/dL</strong> ; T3 : Hb &lt; <strong>10,5 g/dL</strong></li>
  <li>Enfant 6-14 ans : Hb &lt; 12 g/dL</li>
  <li>Enfant &lt; 6 ans : Hb &lt; 11 g/dL</li>
  <li>Nouveau-ne : Hb &lt; <strong>14 g/dL</strong></li>
  </ul>
</li>
<li>On se base sur l'<strong>Hb</strong> et non sur le nombre de GR (un patient peut avoir un nombre normal de GR mais une Hb basse)</li>
<li><strong>Fausses anémies par hémodilution</strong> : grossesse, hyperprotéinémie, insuffisance cardiaque, splénomégalie</li>
</ul>

<h3>Signes cliniques de l'anémie</h3>
<ul>
<li><strong>Syndrome anémique</strong> : pâleur cutaneo-muqueuse (conjonctives, paumes, ongles), asthénie, dyspnée d'effort, tachycardie</li>
<li><strong>Signes de gravité</strong> : dyspnée de repos, tachycardie &gt; 120/min, hypotension, signes d'insuffisance cardiaque, angor, troubles de conscience, lipothymies</li>
<li>Tolérance depend de la <strong>vitesse d'installation</strong> (anémie chronique mieux tolérée qu'aiguë) et du terrain (sujet âgé, coronarien)</li>
<li><strong>Urgence transfusionnelle</strong> : Hb &lt; 6 g/dL ou anémie mal tolérée cliniquement</li>
</ul>

<h3>Caractérisation de l'anémie</h3>
<ul>
<li><strong>VGM</strong> : microcytaire (&lt; 80 fL), normocytaire (80-100 fL), macrocytaire (&gt; 100 fL)</li>
<li><strong>CCMH</strong> : normochrome (32-36%), hypochrome (&lt; 32%)</li>
<li><strong>Réticulocytes</strong> : régénérative (&gt; 120 G/L = cause périphérique), arégénérative (&lt; 120 G/L = cause centrale)</li>
<li>Les réticulocytes ne sont dosés que <strong>si VGM normal ou augmenté</strong> (inutile si microcytaire car toujours arégénérative)</li>
</ul>

<h3>Anémie microcytaire - Généralites</h3>
<ul>
<li>VGM &lt; 80 fL, le plus souvent <strong>hypochrome</strong></li>
<li>Traduit un <strong>défaut de synthèse de l'hémoglobine</strong> : problème de fer, de globine ou d'heme</li>
<li>Toujours <strong>arégénérative</strong> (cause centrale) &rarr; pas besoin de doser les réticulocytes</li>
<li>3 grandes causes : <strong>carence martiale</strong> (la plus fréquente +++), <strong>anémie inflammatoire</strong>, <strong>syndrome thalassemique</strong></li>
<li>Premier examen a demander : <strong>bilan martial</strong> (ferritine en premier)</li>
</ul>

<h3>Métabolisme du fer</h3>
<ul>
<li>Stock total : <strong>3-5 g</strong> dont 2/3 dans l'hémoglobine, 1/3 réserve (ferritine/hemosiderine)</li>
<li>Besoins journaliers : <strong>1-2 mg</strong> (compensant les pertes insensibles)</li>
<li>Absorption <strong>duodenale</strong> (partie proximale), fer alimentaire heminique (viande = mieux absorbe) et non heminique</li>
<li><strong>Transferrine</strong> : protéine de transport du fer dans le sang (2 sites de fixation)</li>
<li><strong>CST</strong> (Coefficient de Saturation de la Transferrine) = fer serique / transferrine. Normal : 20-40%</li>
<li><strong>Ferritine</strong> : protéine de stockage, reflet des réserves en fer (<strong>meilleur marqueur biologique</strong>)
  <ul>
  <li>Ferritine basse = carence en fer (spécifique)</li>
  <li>Ferritine normale ou haute n'exclut pas une carence si inflammation associée</li>
  </ul>
</li>
<li><strong>Hepcidine</strong> : hormone hépatique, régulateur clé de l'homéostasie du fer
  <ul>
  <li>Augmentée en cas d'inflammation (IL-6) &rarr; bloque absorption intestinale et relargage macrophagique du fer</li>
  <li>Diminuée en cas de carence en fer, hypoxie, érythropoiese accrue &rarr; augmenté absorption</li>
  </ul>
</li>
</ul>

<h3>Carence martiale (carence en fer)</h3>
<ul>
<li><strong>Cause la plus fréquente d'anémie dans le monde</strong></li>
<li><strong>Bilan martial</strong> : ferritine <strong>basse</strong> (meilleur marqueur), fer serique bas, transferrine <strong>augmentée</strong>, CST <strong>diminué &lt; 20%</strong></li>
<li><strong>Évolution en 3 stades</strong> :
  <ul>
  <li>Stade 1 : diminution des réserves (ferritine basse seule, NFS normale)</li>
  <li>Stade 2 : diminution du fer serique et du CST, apparition d'une anémie normocytaire</li>
  <li>Stade 3 : anémie microcytaire hypochrome franche</li>
  </ul>
</li>
<li><strong>Étiologies</strong> :
  <ul>
  <li>Pertes excessives : <strong>saignements chroniques</strong> (digestifs chez l'homme et la femme ménopausée = fibroscopie/coloscopie ; gynécologiques chez la femme en activité génitale = ménorragies)</li>
  <li>Augmentation des besoins : grossesse, croissance, prematurité</li>
  <li>Défaut d'apport : régime déséquilibré, malabsorption (maladie cœliaque, gastrectomie, bypass gastrique)</li>
  </ul>
</li>
<li><strong>Traitement</strong> :
  <ul>
  <li>Supplementation en fer per os (<strong>sulfate ferreux</strong>) pendant <strong>3-6 mois</strong> (jusqu'a normalisation de la <strong>ferritine</strong>)</li>
  <li>Fer IV si intolerance digestive, malabsorption ou nécessite de correction rapide</li>
  <li><strong>Traiter la cause</strong> (indispensable +++)</li>
  <li>Contrôle : <strong>crise reticulocytaire</strong> en 7-10 jours, Hb se normalise en 4-6 semaines, ferritine en 3-6 mois</li>
  </ul>
</li>
</ul>

<h3>Anémie inflammatoire</h3>
<ul>
<li>Mécanisme : l'inflammation augmenté la production d'<strong>hepcidine</strong> (via IL-6) &rarr; séquestration du fer dans les macrophages &rarr; fer fonctionnellement indisponible</li>
<li><strong>Bilan</strong> : fer serique <strong>bas</strong>, ferritine <strong>normale ou augmentée</strong>, transferrine <strong>diminuée</strong>, CRP <strong>augmentée</strong></li>
<li>Anémie d'abord <strong>normocytaire</strong> puis microcytaire si inflammation prolongée (> quelques semaines)</li>
<li><strong>Étiologies</strong> : infections chroniques, maladies auto-immunes, cancers, maladies inflammatoires chroniques (Crohn, PR)</li>
<li>Traitement : traiter la cause de l'inflammation</li>
</ul>

<h3>Carence martiale vs anémie inflammatoire - Tableau comparatif</h3>
<ul>
<li><strong>Ferritine</strong> : BASSE (carence) vs normale/AUGMENTEE (inflammation)</li>
<li><strong>Transferrine</strong> : AUGMENTEE (carence) vs DIMINUEE (inflammation)</li>
<li><strong>CST</strong> : BAS dans les deux cas</li>
<li><strong>Fer serique</strong> : BAS dans les deux cas</li>
<li><strong>CRP</strong> : NORMALE (carence) vs AUGMENTEE (inflammation)</li>
<li>Situations mixtes (carence + inflammation) : doser le <strong>récepteur soluble de la transferrine (RsTf)</strong> = augmenté si carence vraie associée</li>
</ul>

<h3>Syndrome thalassemique</h3>
<ul>
<li><strong>Définition</strong> : anomalie génétique de synthèse des chaînes de globine (alpha ou beta)</li>
<li>Transmission <strong>autosomique récessive</strong></li>
<li>Répartition géographique : bassin méditerranéen, Afrique, Asie du Sud-Est (zone d'endémie palustre = avantage sélectif de l'hétérozygote)</li>
<li><strong>Beta-thalassémie</strong> : déficit en chaîne beta, excès de chaîne alpha &rarr; précipitation intracellulaire et hémolyse
  <ul>
  <li>Mineure (trait) : anémie modérée microcytaire, <strong>pseudo-polyglobulie</strong>, Hb A2 augmentée (&gt; 3,5%) a l'électrophorese</li>
  <li>Intermediaire : anémie modérée a sévère, pas toujours transfusion-dependant</li>
  <li>Majeure (anémie de <strong>Cooley</strong>) : anémie sévère, dependance transfusionnelle des le jeune âge, HbF tres augmentée</li>
  </ul>
</li>
<li><strong>Alpha-thalassémie</strong> : déficit en chaîne alpha (deletion de 1 a 4 genes alpha)
  <ul>
  <li>1 gène delete : porteur silencieux</li>
  <li>2 genes délétés : trait alpha-thalassemique (microcytose isolée)</li>
  <li>3 genes délétés : hemoglobinose H, anémie hémolytique</li>
  <li>4 genes délétés : hydrops foetalis, incompatible avec la vie</li>
  </ul>
</li>
<li>Diagnostic : <strong>électrophorese de l'hémoglobine</strong>, <strong>bilan martial normal</strong> (++)</li>
<li>NFS : microcytose avec pseudo-polyglobulie, CCMH normale ou peu diminuée</li>
</ul>`
      },
      {
        title: "Anémies normo/macrocytaires",
        content: `<h3>Rappels et définitions</h3>
<ul>
<li><strong>Anémie normocytaire</strong> : VGM 80-100 fL</li>
<li><strong>Anémie macrocytaire</strong> : VGM &gt; 100 fL</li>
<li>Démarche diagnostique clé : doser les <strong>réticulocytes</strong> pour séparer régénérative (&gt; 120 G/L) et arégénérative (&lt; 120 G/L)</li>
</ul>

<h3>Anémie normo/macrocytaire régénérative</h3>
<ul>
<li>Réticulocytes &gt; 120 G/L &rarr; cause <strong>périphérique</strong> (sang)</li>
<li>VGM légèrement augmenté car les réticulocytes sont plus gros que les GR matures (la macrocytose est transitoire)</li>
<li>Hyperreticulocytose apparait <strong>5-7 jours</strong> après le processus initial (delai de production médullaire)</li>
<li><strong>3 mécanismes principaux</strong> :
  <ul>
  <li><strong>Hémorragie aigue</strong> (pertes sanguines) : au debut, pas de baisse d'Hb car saignement a hématocrite constant</li>
  <li><strong>Hémolyse pathologique</strong> (destruction accélérée des GR)</li>
  <li><strong>Régénération médullaire</strong> (post-carence corrigée en fer/B12/B9, post-chimiothérapie)</li>
  </ul>
</li>
</ul>

<h3>Anémie hémolytique - Généralites</h3>
<ul>
<li><strong>Définition</strong> : raccourcissement de la durée de vie des GR (&lt; 120 jours)</li>
<li><strong>Hémolyse intravasculaire</strong> : dans la circulation &rarr; libération d'Hb libre dans le plasma
  <ul>
  <li>Hb libre se fixe sur l'<strong>haptoglobine</strong> (effondrée), hémoglobinurie (urines foncées), hémoglobinémie</li>
  <li>LDH tres augmentée, bilirubine libre augmentée</li>
  </ul>
</li>
<li><strong>Hémolyse extravasculaire (tissulaire)</strong> : dans la rate/foie (macrophages)
  <ul>
  <li>Ictère a <strong>bilirubine libre</strong> (non conjuguée), splénomégalie</li>
  <li>Haptoglobine diminuée, LDH augmentée</li>
  </ul>
</li>
<li><strong>Bilan d'hémolyse</strong> : bilirubine libre augmentée, <strong>LDH augmentée</strong>, <strong>haptoglobine effondrée</strong>, réticulocytes augmentés</li>
</ul>

<h3>Étiologies des anémies hémolytiques</h3>
<ul>
<li><strong>Corpusculaires</strong> (constitutionnelles = intrinsèques au GR) :
  <ul>
  <li>Anomalies de <strong>membrane</strong> : spherocytose héréditaire (Minkowski-Chauffard), elliptocytose</li>
  <li>Anomalies d'<strong>hémoglobine</strong> : drépanocytose (HbS), thalassémies majeures</li>
  <li>Anomalies <strong>enzymatiques</strong> : déficit en G6PD, déficit en pyruvate kinase</li>
  </ul>
</li>
<li><strong>Extracorpusculaires</strong> (acquises = extrinsèques) :
  <ul>
  <li><strong>Immunologiques</strong> : AHAI (test de Coombs direct positif), allo-immunisation transfusionnelle, maladie hémolytique du nouveau-ne</li>
  <li><strong>Mécaniques</strong> : MAT (schizocytes +++), protheses valvulaires</li>
  <li><strong>Infectieuses</strong> : paludisme (acces palustre), septicémie a Clostridium</li>
  <li><strong>Toxiques</strong> : venins de serpent, plomb (saturnisme)</li>
  </ul>
</li>
<li><strong>Exception</strong> : l'HPN (hémoglobinurie paroxystique nocturne) est corpusculaire mais ACQUISE</li>
</ul>

<h3>Drepanocytose - Points cles</h3>
<ul>
<li>Mutation ponctuelle du gène de la beta-globine (Glu &rarr; Val en position 6) : HbA &rarr; <strong>HbS</strong></li>
<li>Transmission autosomique récessive, <strong>maladie génétique la plus fréquente en France</strong></li>
<li>Hétérozygote AS : porteur sain, protege contre le paludisme</li>
<li>Homozygote SS : formée majeure avec crises vaso-occlusives, anémie hémolytique chronique</li>
<li><strong>Physiopathologie</strong> : en condition d'hypoxie/déshydratation, HbS polymerise &rarr; GR rigide en formée de faucille (drepanocyte) &rarr; obstruction microvasculaire</li>
<li><strong>Complications</strong> : crises vaso-occlusives osseuses, syndrome thoracique aigu, AVC, infections (asplenie fonctionnelle &rarr; germes encapsules), lithiase biliaire pigmentaire, retinopathie, néphropathie</li>
<li>Diagnostic : <strong>électrophorese de l'hémoglobine</strong> (HbS &gt; 50%, absence d'HbA en formée SS)</li>
<li>Depistage neonatal systematique en France</li>
</ul>

<h3>Spherocytose héréditaire (Minkowski-Chauffard)</h3>
<ul>
<li>Anomalie héréditaire des protéines du cytosquelette du GR (spectrine, ankyrine, bande 3)</li>
<li>Perte progressive de membrane &rarr; <strong>sphérocytes</strong> peu déformables &rarr; séquestration et destruction splénique</li>
<li>Transmission autosomique <strong>dominante</strong> (le plus souvent)</li>
<li>Diagnostic : sphérocytes au frottis, <strong>test EMA diminué</strong>, résistance osmotique diminuée</li>
<li>Traitement : splenectomie si formée sévère, supplementation en folates</li>
</ul>

<h3>Déficit en G6PD</h3>
<ul>
<li>Transmission récessive <strong>liée a l'X</strong> (garçons atteints)</li>
<li>G6PD = enzyme de la voie des pentoses phosphates &rarr; production de NADPH &rarr; protection contre le stress oxydatif</li>
<li>Crises hémolytiques aiguës déclenchées par : <strong>fèves</strong> (favisme), médicaments oxydants (antimalariques, sulfamides, aspirine a forte dose), infections</li>
<li>Diagnostic : dosage de l'activité G6PD (a faire a distance de la crise car les réticulocytes ont une activité normale)</li>
</ul>

<h3>AHAI (Anémie hémolytique auto-immune)</h3>
<ul>
<li>Auto-anticorps diriges contre les antigènes de surface des GR</li>
<li>Diagnostic : <strong>test de Coombs direct positif</strong> (DAT = Direct Antiglobulin Test)</li>
<li>AHAI a anticorps chauds (IgG, 37 degC) : la plus fréquente, hémolyse extravasculaire splénique</li>
<li>AHAI a anticorps froids (IgM, 4 degC) : agglutinines froides, hémolyse intravasculaire, acrocyanose</li>
</ul>

<h3>Anémie normo/macrocytaire arégénérative</h3>
<ul>
<li>Réticulocytes &lt; 120 G/L &rarr; cause <strong>centrale</strong> (moelle osseuse)</li>
<li>Nécessite souvent un <strong>myélogramme</strong></li>
<li><strong>Étiologies des anémies centrales</strong> :
  <ul>
  <li>Carence en <strong>B12/B9</strong> : anémie mégaloblastique (VGM souvent &gt; 110 fL)</li>
  <li><strong>Insuffisance rénale chronique</strong> : déficit en EPO</li>
  <li><strong>Syndromes myélodysplasiques</strong> : dysplasie médullaire du sujet âgé</li>
  <li><strong>Envahissement médullaire</strong> : leucémies, lymphomes, métastases, myélofibrose</li>
  <li><strong>Aplasie médullaire</strong> : moelle vide, pancytopénie</li>
  <li><strong>Érythroblastopenie</strong> : disparition sélective des précurseurs érythroides</li>
  <li>Hypothyroïdie, insuffisance hépatique, alcoolisme (macrocytose sans mégaloblastose)</li>
  </ul>
</li>
</ul>

<h3>Carence en B12 et B9 - Anémie mégaloblastique</h3>
<ul>
<li><strong>Anémie macrocytaire mégaloblastique</strong> : VGM souvent &gt; 110-120 fL</li>
<li>Myelogramme : moelle riche avec <strong>megaloblastes</strong> (grandes cellules a chromatine fine, asynchronisme nucleo-cytoplasmique)</li>
<li>Souvent associée a une neutropénie et thrombopénie modérées (pancytopénie possible) et <strong>PNN hypersegmentes</strong></li>
<li>LDH et bilirubine libre augmentées (hémolyse intramedullaire = avortement médullaire)</li>
<li><strong>Maladie de Biermer</strong> : cause la plus fréquente de carence en B12
  <ul>
  <li>Maladie <strong>auto-immune</strong> avec Ac anti-facteur intrinsèque et anti-cellules pariétales gastriques</li>
  <li>Gastrite atrophique fundique &rarr; achlorhydrie</li>
  <li>Signes neurologiques possibles : <strong>sclérose combinée de la moelle</strong> (syndrome cordonal postérieur = troubles proprioceptifs, ataxie)</li>
  <li>Risque de cancer gastrique (surveillance endoscopique)</li>
  </ul>
</li>
<li><strong>Autres causes de carence B12</strong> : gastrectomie, resection iléale, maladie de Crohn iléale, pullulation microbienne, botriocephale</li>
<li><strong>Causes de carence B9</strong> : carence d'apport (malnutrition, alcoolisme), malabsorption (maladie cœliaque), augmentation des besoins (grossesse, hémolyse chronique), médicaments anti-foliques (méthotrexate, triméthoprime)</li>
<li><strong>Traitement</strong> : B12 IM si Biermer (a vie), B9 per os ; <strong>ne jamais donner de B9 seul sans exclure une carence en B12</strong> (risque d'aggravation neurologique)</li>
</ul>

<h3>Complications a long terme des anémies hémolytiques chroniques</h3>
<ul>
<li><strong>Lithiase biliaire pigmentaire</strong> (bilirubinate de calcium)</li>
<li><strong>Surcharge en fer</strong> (hemochromatose post-transfusionnelle si transfusions répétées)</li>
<li><strong>Crise aplasique</strong> : infection a Parvovirus B19 &rarr; arrêt transitoire de l'érythropoiese</li>
<li><strong>Crise mégaloblastique</strong> : épuisement des réserves en folates (besoins accrus)</li>
</ul>`
      },
      {
        title: "Granulopoïèse et fonctions des PNN",
        content: `<h3>Hématopoiese - Localisation selon l'âge</h3>
<ul>
<li><strong>Vie embryonnaire</strong> : sac vitellin (premières semaines), puis foie et rate</li>
<li><strong>A partir du 5e mois de vie foetale</strong> : moelle osseuse principalement</li>
<li><strong>Adulte</strong> : moelle osseuse des os plats et courts (sternum, cretes iliaques, vertebres, cotes, epiphyses des os longs)</li>
<li><strong>Niche hématopoietique</strong> : microenvironnement médullaire nécessaire au maintien des CSH (cellules stromales, matrice extracellulaire, facteurs de croissance, osteoblastes)</li>
</ul>

<h3>CSH et régulation</h3>
<ul>
<li><strong>CSH</strong> : cellules rares (~0,01% des cellules médullaires), marqueur <strong>CD34+</strong></li>
<li>Auto-renouvellement + différenciation en progéniteurs multipotents</li>
<li>Régulation par : <strong>cytokines</strong> (SCF, FLT3-ligand, GM-CSF, G-CSF, M-CSF, IL-3, TPO, EPO)</li>
<li><strong>G-CSF</strong> : facteur de croissance des granulocytes
  <ul>
  <li>Stimule la production, la maturation et la libération des PNN par la moelle</li>
  <li>Utilisation thérapeutique : traitement des neutropénies sévères, mobilisation des CSH pour greffe</li>
  </ul>
</li>
</ul>

<h3>Methodes d'exploration de l'hématopoïèse</h3>
<ul>
<li><strong>NFS et frottis sanguin</strong> : examen de première intention</li>
<li><strong>Myelogramme</strong> : ponction sternale ou iliaque, analyse cytologique de la moelle
  <ul>
  <li>Indications : cytopénie inexpliquée, suspicion de leucémie, bilan d'une anomalie de la NFS</li>
  <li>Analyse la richesse, les proportions des lignées, la présence de cellules anormales</li>
  </ul>
</li>
<li><strong>Biopsie osteo-médullaire (BOM)</strong> : prélèvement d'un fragment osseux avec moelle (crete iliaque postérieure)
  <ul>
  <li>Analyse histologique : architecture médullaire, fibrose, envahissement tumoral</li>
  <li>Indications : suspicion d'aplasie, de myélofibrose, de lymphome médullaire</li>
  </ul>
</li>
</ul>

<h3>Granulopoïèse</h3>
<ul>
<li><strong>Définition</strong> : production des polynucléaires (neutrophiles, éosinophiles, basophiles) a partir de la CSH</li>
<li><strong>Lignée granuleuse neutrophile</strong> : CSH &rarr; progéniteur &rarr; <strong>myéloblaste</strong> &rarr; <strong>promyélocyte</strong> &rarr; <strong>myélocyte</strong> &rarr; <strong>métamyélocyte</strong> &rarr; PNN band cell (non segmenté) &rarr; <strong>PNN mature</strong></li>
<li>Durée de la granulopoïèse : environ <strong>10-14 jours</strong></li>
<li>Maturation : condensation du noyau (lobulation progressive de 2 a 5 lobes), apparition des granulations spécifiques, perte de la capacité de division a partir du <strong>métamyélocyte</strong></li>
<li>Cellules encore en division : myéloblaste, promyélocyte, myélocyte</li>
<li>Cellules post-mitotiques : métamyélocyte, PNN</li>
</ul>

<h3>Les granulations des PNN</h3>
<ul>
<li><strong>Granulations primaires (azurophiles)</strong> : apparaissent au stade promyélocyte
  <ul>
  <li>Contiennent : <strong>myéloperoxydase (MPO)</strong>, elastase, defensines, lysozyme, cathepsines</li>
  <li>Activité bactéricide dépendante et indépendante de l'O2</li>
  </ul>
</li>
<li><strong>Granulations secondaires (spécifiques)</strong> : apparaissent au stade myélocyte
  <ul>
  <li>Contiennent : lactoferrine, collagenase, lysozyme, récepteurs membranaires</li>
  </ul>
</li>
<li><strong>Granulations tertiaires (gelatinase)</strong> : contiennent gelatinase, facilitent la diapedese</li>
<li><strong>Vesicules secretoires</strong> : mobilisees en premier lors de l'activation, contiennent des récepteurs membranaires</li>
</ul>

<h3>Répartition des PNN dans l'organisme</h3>
<ul>
<li><strong>Pool médullaire</strong> : réserve dans la moelle osseuse (10-15 fois le pool circulant) - mobilisable rapidement (corticoides, stress, G-CSF)</li>
<li><strong>Pool circulant</strong> : PNN dans le sang (<strong>seuls comptes par la NFS</strong>)</li>
<li><strong>Pool marginal</strong> : PNN adherents aux parois vasculaires (non comptes par la NFS) - environ egal au pool circulant</li>
<li><strong>Pool tissulaire</strong> : PNN ayant migre dans les tissus (passage unidirectionnel, pas de retour)</li>
<li>Valeur normale PNN : <strong>1,5-7 G/L</strong></li>
<li>Demargination (stress, exercice, adrénaline) &rarr; fausse polynucléose</li>
</ul>

<h3>Fonctions des PNN</h3>
<ul>
<li>Première ligne de <strong>défense immunitaire innée</strong> contre les infections bactériennes et fongiques</li>
<li><strong>Chimiotactisme</strong> : migration orientée vers le foyer infectieux, guidée par des signaux chimiques (chimiokines IL-8/CXCL8, C5a, LTB4, fMLP bactérien)</li>
<li><strong>Diapédèse</strong> : traversée de la paroi vasculaire
  <ul>
  <li>Roulement (rolling) : <strong>sélectines</strong> (E-sélectine, P-sélectine)</li>
  <li>Adhesion ferme : <strong>integrines</strong> (LFA-1, Mac-1) se liant aux ICAM endotheliaux</li>
  <li>Migration trans-endothéliale (diapedese proprement dite)</li>
  </ul>
</li>
<li><strong>Phagocytose</strong> : reconnaissance et ingestion des micro-organismes
  <ul>
  <li>Opsonisation par <strong>IgG</strong> et <strong>C3b</strong> favorise la phagocytose</li>
  <li>Formation du phagosome puis du phagolysosome</li>
  </ul>
</li>
<li><strong>Bactericidie</strong> :
  <ul>
  <li>Dependante de l'O2 : <strong>explosion oxydative</strong> (NADPH oxydase produit anion superoxyde O2-, puis H2O2, puis HOCl par la MPO)</li>
  <li>Indépendante de l'O2 : enzymes lysosomales, defensines, protéines cationiques, lactoferrine</li>
  </ul>
</li>
<li><strong>NETose</strong> : libération de NETs (Neutrophil Extracellular Traps) = réseau de chromatine extracellulaire piégeant les bactéries</li>
</ul>

<h3>Pathologies liees aux PNN</h3>
<ul>
<li><strong>Granulomatose septique chronique (CGD)</strong> : déficit en NADPH oxydase &rarr; pas d'explosion oxydative &rarr; infections bactériennes et fongiques récidivantes</li>
<li><strong>Déficit d'adhesion leucocytaire (LAD)</strong> : déficit en integrines &rarr; pas de diapedese &rarr; infections sans pus</li>
<li><strong>Neutropénie</strong> : risque infectieux proportionnel a la profondeur et a la durée</li>
</ul>`
      },
      {
        title: "Introduction aux hémopathies",
        content: `<h3>Définition des hémopathies</h3>
<ul>
<li><strong>Hémopathies</strong> : ensemble des maladies touchant les cellules sanguines et leurs précurseurs</li>
<li>Classees en <strong>hémopathies malignes</strong> (cancers hématologiques) et <strong>non malignes</strong> (cytopénies, troubles de l'hémostase)</li>
<li>Les hémopathies malignes resultent de la transformation d'une cellule hématopoietique a un stade donne de sa différenciation</li>
</ul>

<h3>Classification des hémopathies malignes</h3>
<ul>
<li><strong>Hémopathies myéloïdes</strong> : touchent la lignée myéloïde
  <ul>
  <li><strong>Leucémies aiguës myéloïdes (LAM)</strong> : prolifération de blastes myéloïdes (&gt; 20% dans la moelle), blocage de maturation</li>
  <li><strong>Syndromes myéloprolifératifs (SMP)</strong> : prolifération clonale AVEC maturation conservée
    <ul>
    <li>LMC, polyglobulie de Vaquez, thrombocytémie essentielle, myélofibrose primitive</li>
    </ul>
  </li>
  <li><strong>Syndromes myélodysplasiques (SMD)</strong> : cytopénies avec dysplasie médullaire, hématopoïèse inefficace, risque de transformation en LAM</li>
  </ul>
</li>
<li><strong>Hémopathies lymphoïdes</strong> : touchent la lignée lymphoïde
  <ul>
  <li><strong>Leucémies aiguës lymphoblastiques (LAL)</strong> : prolifération de blastes lymphoïdes</li>
  <li><strong>Leucémie lymphoïde chronique (LLC)</strong> : prolifération de lymphocytes B matures</li>
  <li><strong>Lymphomes</strong> : Hodgkin et non-Hodgkinien (proliférations ganglionnaires)</li>
  <li><strong>Myélome multiple</strong> : prolifération plasmocytaire</li>
  </ul>
</li>
</ul>

<h3>Leucémies aiguës - Généralites</h3>
<ul>
<li><strong>Définition</strong> : prolifération clonale maligne de <strong>blastes</strong> (cellules immatures bloqués dans leur différenciation) dans la moelle osseuse</li>
<li>Envahissement médullaire &rarr; <strong>insuffisance médullaire</strong> : anémie, neutropénie (infections), thrombopénie (hémorragies)</li>
<li><strong>Signes cliniques</strong> :
  <ul>
  <li><strong>Syndrome d'insuffisance médullaire</strong> : anémie, infections, hémorragies</li>
  <li><strong>Syndrome tumoral</strong> : ADP, splénomégalie, hépatomégalie, hypertrophie gingivale (LAM4-5), atteinte cutanée, atteinte méningée</li>
  <li><strong>Syndrome de lyse tumorale</strong> : hyperuricemie, hyperkaliémie, hyperphosphatémie, hypocalcémie, insuffisance rénale</li>
  </ul>
</li>
<li>Diagnostic : <strong>myélogramme</strong> avec <strong>&gt; 20% de blastes</strong></li>
<li>Complétée par : immunophénotypage, cytogénétique, biologie moléculaire</li>
</ul>

<h3>LAM (Leucémie Aigue Myéloïde)</h3>
<ul>
<li><strong>Adulte</strong> principalement (âge median 65-70 ans)</li>
<li>Blastes avec <strong>myéloperoxydase positive</strong> (MPO+) et/ou corps d'Auer (batonnets azurophiles = pathognomoniques)</li>
<li>Classification FAB : LAM0 a LAM7 selon le stade de blocage de différenciation</li>
<li><strong>LAM3 (promyelocytaire)</strong> : t(15;17), gène PML-RARA, risque de CIVD, traitement spécifique par acide tout-trans rétinoïdique (ATRA) + arsenic, bon pronostic</li>
</ul>

<h3>LAL (Leucémie Aigue Lymphoblastique)</h3>
<ul>
<li>Cancer le plus fréquent de l'<strong>enfant</strong> (pic 2-5 ans)</li>
<li><strong>LAL-B</strong> (85%) : CD19+, CD10+ (CALLA), CD22+, MPO negative</li>
<li><strong>LAL-T</strong> (15%) : CD3+, CD7+, médiastin souvent atteint (masse médiastinale)</li>
<li>Bon pronostic chez l'enfant (survie &gt; 90% pour LAL-B)</li>
<li>Adulte : pronostic moins bon, t(9;22) chromosome Philadelphie = facteur de mauvais pronostic</li>
</ul>

<h3>Syndromes myéloprolifératifs (SMP)</h3>
<ul>
<li>Prolifération clonale d'une ou plusieurs lignées myéloïdes <strong>avec maturation conservée</strong> (cellules matures circulantes en excès)</li>
<li>Difference avec LA : pas de blocage de maturation, cellules matures en exces</li>
<li><strong>LMC</strong> : chromosome Philadelphie <strong>t(9;22)</strong> &rarr; gène de fusion <strong>BCR-ABL</strong>, hyperleucocytose majeure avec myélémie équilibrée, basophilie</li>
<li><strong>Polyglobulie de Vaquez</strong> : mutation <strong>JAK2 V617F</strong> (&gt; 95% des cas), polyglobulie vraie, risque thrombotique +++, prurit a l'eau</li>
<li><strong>Thrombocytémie essentielle</strong> : thrombocytose majeure (&gt; 450 G/L), mutations JAK2 (60%)/CALR (25%)/MPL (5%)</li>
<li><strong>Myelofibrose primitive</strong> : fibrose médullaire progressive, splénomégalie massive, myélémie, érythroblastose, dacryocytes (GR en larme)</li>
</ul>

<h3>Syndromes myélodysplasiques (SMD)</h3>
<ul>
<li>Anomalies qualitatives (dysplasie) et quantitatives (cytopénies) de l'hématopoïèse</li>
<li><strong>Sujet âge</strong> (&gt; 60-70 ans), moelle riche et dysplasique</li>
<li>Hématopoiese <strong>inefficace</strong> : moelle riche mais cytopénies dans le sang (apoptose excessive des précurseurs)</li>
<li>Risque de transformation en <strong>LAM secondaire</strong> (10-30% selon le type)</li>
<li>Diagnostic : cytopénies réfractaires, dysplasie sur au moins une lignée au myélogramme</li>
<li>Score pronostique IPSS (blastes, cytopénies, cytogénétique)</li>
</ul>`
      },
      {
        title: "Hémopathies lymphoïdes",
        content: `<h3>Classification des hémopathies lymphoïdes</h3>
<ul>
<li>Proliférations clonales malignes de cellules lymphoïdes (B, T ou NK)</li>
<li><strong>Leucémies</strong> : envahissement sanguin et médullaire prédominant</li>
<li><strong>Lymphomes</strong> : prolifération ganglionnaire ou extraganglionnaire prédominante</li>
<li><strong>Myélome</strong> : prolifération plasmocytaire médullaire</li>
<li>La même cellule tumorale peut se présenter comme leucémie ou lymphome selon la localisation prédominante</li>
</ul>

<h3>Leucémie lymphoïde chronique (LLC)</h3>
<ul>
<li><strong>Hémopathie la plus fréquente</strong> en Occident, sujet âgé (&gt; 60 ans), predominance masculine</li>
<li>Prolifération clonale de <strong>lymphocytes B matures</strong> (petits lymphocytes d'aspect normal)</li>
<li><strong>Decouverte</strong> : souvent fortuite sur NFS montrant une <strong>hyperlymphocytose</strong> &gt; 5 G/L persistante &gt; 3 mois</li>
<li>Frottis sanguin : petits lymphocytes matures, <strong>ombres de Gumprecht</strong> (lymphocytes eclates)</li>
<li><strong>Diagnostic</strong> : immunophénotypage des lymphocytes circulants (CD5+, CD19+, CD23+, FMC7-, CD79b faible), <strong>score de Matutes &ge; 4/5</strong></li>
<li>Pas besoin de myélogramme pour le diagnostic (immunophénotypage sanguin suffit)</li>
<li><strong>Classification de Binet</strong> :
  <ul>
  <li>Stade A : &lt; 3 aires lymphoïdes palpables, pas de cytopénie &rarr; surveillance simple</li>
  <li>Stade B : &ge; 3 aires lymphoïdes palpables</li>
  <li>Stade C : anémie (Hb &lt; 10 g/dL) et/ou thrombopénie (&lt; 100 G/L) &rarr; traitement</li>
  </ul>
</li>
<li><strong>Complications</strong> : infections (hypogammaglobulinemie), AHAI (test de Coombs positif), syndrome de Richter (transformation en lymphome diffus a grandes cellules B), cancers secondaires</li>
</ul>

<h3>Lymphome de Hodgkin (LH)</h3>
<ul>
<li>Pic de fréquence : adulte jeune (<strong>15-35 ans</strong>) et &gt; 50 ans (distribution bimodale)</li>
<li>Cellule tumorale caractéristique : <strong>cellule de Reed-Sternberg</strong> (grande cellule binucléée en oeil de hibou), CD30+, CD15+, dérivés de lymphocytes B</li>
<li>Cellules tumorales <strong>minoritaires</strong> (&lt; 1%) au sein d'un infiltrat inflammatoire reactif abondant</li>
<li><strong>Clinique</strong> : adénopaties superficielles (cervicales +++), signes generaux B (fièvre, sueurs nocturnes, amaigrissement &gt; 10% en 6 mois), prurit, douleur ganglionnaire a l'ingestion d'alcool (rare mais evocatrice)</li>
<li>Diagnostic : <strong>biopsie ganglionnaire</strong> (jamais de cytoponction seule car architecture ganglionnaire nécessaire)</li>
<li>Bilan d'extension : <strong>TEP-TDM</strong>, classification d'Ann Arbor (stades I a IV)</li>
<li>Bon pronostic global (guérison 80-90%), traitement par polychimiothérapie (ABVD) +/- radiothérapie</li>
</ul>

<h3>Lymphomes non-hodgkiniens (LNH)</h3>
<ul>
<li>Groupe hétérogene de proliférations lymphoïdes malignes B (85%) ou T (15%)</li>
<li><strong>LNH indolents</strong> (bas grade) : évolution lente, survie longue mais guérison rare
  <ul>
  <li>Lymphome folliculaire : t(14;18), surexpression BCL2, le plus fréquent des LNH indolents</li>
  <li>Lymphome de la zone marginale, lymphome du MALT (estomac, associe a H. pylori)</li>
  </ul>
</li>
<li><strong>LNH agressifs</strong> (haut grade) : évolution rapide, potentiellement curables
  <ul>
  <li>Lymphome diffus a grandes cellules B (LDGCB) : le plus fréquent des LNH, traitement R-CHOP</li>
  <li>Lymphome de Burkitt : t(8;14), surexpression MYC, croissance tres rapide, association EBV en zone endemique</li>
  </ul>
</li>
<li><strong>Clinique</strong> : adénopaties, splénomégalie, atteintes extraganglionnaires possibles (digestif, cutané, SNC, testiculaire)</li>
<li>Diagnostic : biopsie ganglionnaire avec immunohistochimie</li>
<li>Bilan : TEP-TDM, BOM, ponction lombaire si agressif</li>
</ul>

<h3>Lymphome du manteau</h3>
<ul>
<li>t(11;14), surexpression cycline D1</li>
<li>Évolution intermediaire entre indolent et agressif</li>
<li>Souvent dissemines au diagnostic</li>
</ul>`
      },
      {
        title: "Lymphopoïèse",
        content: `<h3>Généralites</h3>
<ul>
<li><strong>Lymphopoïèse</strong> : processus de production et de maturation des lymphocytes a partir de la CSH</li>
<li>Lymphocytes : cellules de l'<strong>immunité adaptative</strong> (contrairement aux PNN/monocytes = immunité innée)</li>
<li>2 grandes populations : <strong>lymphocytes B</strong> et <strong>lymphocytes T</strong> (+ cellules NK = immunité innée)</li>
<li>Caractéristiques de l'immunité adaptative : <strong>spécificite</strong>, <strong>diversite</strong>, <strong>memoire</strong></li>
</ul>

<h3>Lymphopoïèse B</h3>
<ul>
<li><strong>Lieu de maturation</strong> : moelle osseuse (= Bone marrow, d'ou le nom "B")</li>
<li>Étapes : CSH &rarr; progéniteur lymphoïde commun &rarr; <strong>pro-B</strong> &rarr; <strong>pre-B</strong> &rarr; <strong>B immature</strong> &rarr; <strong>B mature naif</strong></li>
<li><strong>Rearrangement des genes des immunoglobulines</strong> : recombinaison V(D)J
  <ul>
  <li>Chaînes lourdes : réarrangement D-J puis V-DJ (stade pro-B)</li>
  <li>Chaînes légères : réarrangement V-J (stade pre-B)</li>
  <li>Enzymes RAG1/RAG2 essentielles pour la recombinaison</li>
  </ul>
</li>
<li>Selection : elimination des lymphocytes B auto-reactifs (<strong>tolerance centrale</strong>) par deletion clonale, edition du récepteur, ou anergie</li>
<li><strong>Lymphocyte B mature naif</strong> : exprimé <strong>IgM et IgD</strong> de surface (BCR), quitte la moelle pour les organes lymphoïdes secondaires</li>
</ul>

<h3>Activation et différenciation des lymphocytes B</h3>
<ul>
<li>Activation dans les organes lymphoïdes secondaires (ganglions, rate, MALT) &rarr; <strong>centre germinatif</strong></li>
<li>Rencontre avec l'antigène + aide des lymphocytes T CD4+ (lymphocytes T follicular helper = Tfh)</li>
<li>Dans le centre germinatif :
  <ul>
  <li><strong>Hypermutation somatique</strong> : mutations dans la region variable des Ig &rarr; augmentation de l'affinite (maturation d'affinite)</li>
  <li><strong>Commutation de classe (switch isotypique)</strong> : passage d'IgM a IgG, IgA ou IgE (même spécificite, fonction différente)</li>
  <li>Selection des cellules de haute affinite par les cellules dendritiques folliculaires</li>
  </ul>
</li>
<li>Différenciation terminale en <strong>plasmocyte</strong> (sécrétion d'anticorps = Ig solubles) ou <strong>lymphocyte B memoire</strong></li>
<li>Les plasmocytes migrent dans la moelle osseuse (plasmocytes a longue durée de vie)</li>
</ul>

<h3>Lymphopoïèse T</h3>
<ul>
<li><strong>Lieu de maturation</strong> : <strong>thymus</strong></li>
<li>Les progéniteurs lymphoïdes migrent de la moelle vers le thymus via le sang</li>
<li>Étapes : thymocyte <strong>double négatif</strong> (CD4- CD8-) &rarr; <strong>double positif</strong> (CD4+ CD8+) &rarr; <strong>simple positif</strong> (CD4+ OU CD8+)</li>
<li><strong>Rearrangement du TCR</strong> : recombinaison V(D)J des genes alpha et beta du TCR</li>
<li><strong>Selection positive</strong> (cortex thymique) : les thymocytes doivent reconnaitre le CMH du soi avec une affinite suffisante &rarr; restriction CMH</li>
<li><strong>Selection negative</strong> (médullaire thymique) : elimination des thymocytes trop reactifs au soi (autoimmuns) &rarr; <strong>tolerance centrale</strong></li>
<li>95% des thymocytes meurent par apoptose lors de la sélection (sélection tres stringente)</li>
</ul>

<h3>Sous-populations de lymphocytes T</h3>
<ul>
<li><strong>Lymphocytes T CD4+</strong> (helper) : reconnaissance antigène via <strong>CMH de classe II</strong>
  <ul>
  <li>Th1 : activation des macrophages, réponse anti-intracellulaire (IFN-gamma)</li>
  <li>Th2 : aide aux lymphocytes B, réponse anti-parasitaire, allergie (IL-4, IL-5, IL-13)</li>
  <li>Th17 : réponse anti-bactérienne/fongique, inflammation (IL-17)</li>
  <li>Treg (régulateurs) : suppression de la réponse immunitaire, maintien de la tolerance (CD25+, FoxP3+)</li>
  <li>Tfh (follicular helper) : aide aux lymphocytes B dans le centre germinatif</li>
  </ul>
</li>
<li><strong>Lymphocytes T CD8+</strong> (cytotoxiques) : reconnaissance antigène via <strong>CMH de classe I</strong>, destruction des cellules infectees ou tumorales par perforines/granzymes</li>
<li><strong>TCR</strong> (T Cell Receptor) : récepteur spécifique de l'antigène, réarrangement des genes similaire aux Ig, toujours associe au complexe <strong>CD3</strong></li>
</ul>

<h3>Cellules NK (Natural Killer)</h3>
<ul>
<li>Lymphocytes de l'<strong>immunité innée</strong> (pas de réarrangement de récepteur spécifique)</li>
<li>Cytotoxicite naturelle contre cellules tumorales et infectees par des virus</li>
<li>Reconnaissance du <strong>soi manquant</strong> : les cellules NK tuent les cellules qui n'expriment pas le CMH-I</li>
<li>Marqueurs : <strong>CD56+, CD16+, CD3-</strong></li>
<li>Mécanismes : perforines/granzymes, ADCC (Antibody-Dependent Cell-mediated Cytotoxicity via CD16)</li>
</ul>

<h3>Organes lymphoïdes</h3>
<ul>
<li><strong>Primaires (centraux)</strong> : moelle osseuse (lymphocytes B), thymus (lymphocytes T) &rarr; production et maturation, acquisition du repertoire</li>
<li><strong>Secondaires (périphériques)</strong> : ganglions lymphatiques, rate, MALT (tissu lymphoïde des muqueuses, plaques de Peyer, amygdales) &rarr; activation et réponse immunitaire</li>
<li>Le thymus involue avec l'âge (atrophie thymique)</li>
</ul>

<h3>Valeurs normales des lymphocytes</h3>
<ul>
<li>Lymphocytes totaux : <strong>1-4 G/L</strong> chez l'adulte</li>
<li>Lymphocytes T : 60-80% des lymphocytes circulants (CD4 : 35-55%, CD8 : 25-35%)</li>
<li>Lymphocytes B : 5-15%</li>
<li>Cellules NK : 5-15%</li>
<li><strong>Rapport CD4/CD8</strong> normal &gt; 1 (inverse dans le VIH evolue)</li>
</ul>`
      },
      {
        title: "Le globule rouge et sa membrane",
        content: `<h3>Caractéristiques du GR</h3>
<ul>
<li><strong>Cellule anucléée</strong> (pas de noyau, pas d'organites, pas de mitochondries), formée de <strong>disque biconcave</strong></li>
<li>Diametre : <strong>7-8 microns</strong>, épaisseur 2 microns au bord et 1 micron au centre</li>
<li>Volume : environ <strong>90 fL</strong></li>
<li>Durée de vie : <strong>120 jours</strong></li>
<li>Contenu : essentiellement de l'<strong>hémoglobine</strong> (95% du poids sec = 300 millions de molecules/GR), enzymes de la glycolyse</li>
<li>Pas de mitochondries &rarr; métabolisme exclusivement <strong>anaerobie</strong> (glycolyse)</li>
<li>La formée biconcave optimise le rapport surface/volume &rarr; <strong>déformabilité maximale</strong> pour traverser les capillaires</li>
</ul>

<h3>Structure de la membrane du GR</h3>
<ul>
<li><strong>Bicouche lipidique</strong> : phospholipides (50%), cholesterol (25%), glycolipides</li>
<li><strong>Asymetrie des phospholipides</strong> : phosphatidylserine (PS) exclusivement sur le feuillet <strong>interne</strong>
  <ul>
  <li>Externalisation de la PS = signal de reconnaissance par les macrophages (phagocytose) = marqueur d'apoptose/senescence</li>
  <li>Rôle procoagulant si PS externalisée</li>
  </ul>
</li>
<li><strong>Protéines transmembranaires</strong> :
  <ul>
  <li><strong>Bande 3 (échangeur anions)</strong> : échange Cl-/HCO3- (transport du CO2), ancrage du squelette membranaire</li>
  <li><strong>Glycophorines</strong> (A, B, C, D) : portent les groupes sanguins, constituent le glycocalyx (charge negative = repulsion entre GR)</li>
  </ul>
</li>
<li><strong>Squelette membranaire (cytosquelette)</strong> : réseau protéique sous-membranaire assurant déformabilité et stabilité
  <ul>
  <li><strong>Spectrine</strong> : protéine principale, hétérodimères alpha/beta associes en tétramères formant un réseau hexagonal</li>
  <li><strong>Ankyrine</strong> : liaison spectrine-bande 3 (<strong>interaction verticale</strong>)</li>
  <li><strong>Protéine 4.1</strong> : liaison spectrine-glycophorine C (interaction verticale)</li>
  <li><strong>Actine</strong> (protéine 5) : au niveau des jonctions du réseau de spectrine (<strong>interaction horizontale</strong>)</li>
  <li><strong>Protéine 4.2 (pallidine)</strong> : stabilise l'interaction ankyrine-bande 3</li>
  </ul>
</li>
</ul>

<h3>Propriétés de la membrane</h3>
<ul>
<li><strong>Déformabilité</strong> : capacité du GR a se déformer pour traverser les capillaires (&lt; 3 microns) et les <strong>fentes sinusoïdes spléniques</strong> (test physiologique de déformabilité)
  <ul>
  <li>Depend du rapport surface/volume, de la viscosite interne (concentration en Hb) et de l'elasticite membranaire (cytosquelette)</li>
  </ul>
</li>
<li><strong>Stabilité mécanique</strong> : résistance a la fragmentation (interactions horizontales du cytosquelette)</li>
<li><strong>Permeabilite sélective</strong> : contrôlée des échanges ioniques et hydriques (pompes Na+/K+ ATPase)</li>
</ul>

<h3>Pathologies de la membrane - Anomalies des interactions verticales</h3>
<ul>
<li><strong>Spherocytose héréditaire</strong> (Minkowski-Chauffard) :
  <ul>
  <li>Déficit en spectrine, ankyrine, bande 3 ou protéine 4.2</li>
  <li>Perte de surface membranaire (vesiculation) &rarr; <strong>sphérocytes</strong> (GR sphériques, rapport S/V diminué)</li>
  <li>Séquestration et destruction splénique &rarr; hémolyse chronique extravasculaire</li>
  <li>Transmission autosomique <strong>dominante</strong> (75%) ou récessive</li>
  <li>Clinique : palleur, ictere, splénomégalie, lithiase biliaire</li>
  <li>Diagnostic : sphérocytes au frottis, <strong>test EMA</strong> (éosine-5-maléimide) <strong>diminué</strong> (fixation sur bande 3), résistance globulaire osmotique diminuée</li>
  <li>Traitement : splenectomie si formée sévère (après 5 ans), supplementation en folates, transfusions si nécessaire</li>
  </ul>
</li>
<li><strong>Stomatocytose héréditaire</strong> : anomalie de perméabilité cationique, GR en formée de bouche (stomatocytes), <strong>splenectomie contre-indiquée</strong> (risque thrombotique)</li>
</ul>

<h3>Pathologies de la membrane - Anomalies des interactions horizontales</h3>
<ul>
<li><strong>Elliptocytose héréditaire</strong> : anomalie de spectrine ou protéine 4.1, GR de formée <strong>elliptique/ovale</strong>, souvent asymptomatique</li>
<li><strong>Pyropoikilocytose</strong> : formée sévère d'elliptocytose, fragmentation des GR, anémie hémolytique sévère</li>
</ul>

<h3>HPN (Hemoglobinurie Paroxystique Nocturne)</h3>
<ul>
<li>Déficit <strong>acquis</strong> en GPI (ancre glycosylphosphatidylinositol) par mutation du gène <strong>PIG-A</strong></li>
<li>Perte des protéines ancrees GPI dont <strong>CD55 (DAF)</strong> et <strong>CD59 (MIRL)</strong> &rarr; sensibilité excessive au complement</li>
<li>Triade : hémolyse intravasculaire, thromboses, insuffisance médullaire</li>
<li>Diagnostic : <strong>cytometrie en flux</strong> (déficit CD55/CD59 sur GR et PNN)</li>
<li>Traitement : eculizumab (anticorps anti-C5)</li>
</ul>

<h3>Métabolisme du GR</h3>
<ul>
<li><strong>Glycolyse anaerobie</strong> (voie d'Embden-Meyerhof) : production d'ATP (énergie pour pompes ioniques Na+/K+ ATPase)</li>
<li><strong>Voie des pentoses phosphates (shunt des hexoses)</strong> : production de NADPH via la <strong>G6PD</strong> &rarr; régénération du glutathion réduit &rarr; protection contre le stress oxydatif</li>
<li><strong>Voie de Rapoport-Luebering</strong> : production de <strong>2,3-DPG</strong> (diminué l'affinite de l'Hb pour l'O2 &rarr; facilite la libération d'O2 aux tissus)</li>
<li><strong>Voie de réduction des méthémoglobines</strong> (NADH-méthémoglobine reductase) : maintien du fer a l'état ferreux (Fe2+), car seul Fe2+ fixe l'O2</li>
</ul>

<h3>Destruction physiologique du GR</h3>
<ul>
<li><strong>Hémolyse physiologique</strong> : principalement <strong>extravasculaire</strong> (90%) dans la rate et le foie (macrophages du système reticulo-endothelial)</li>
<li>Le GR vieillissant perd sa déformabilité (perte d'enzymes, perte de surface membranaire) &rarr; séquestré dans la rate</li>
<li>Dégradation de l'Hb : heme &rarr; <strong>bilirubine libre</strong> (non conjuguée, transportée par l'albumine vers le foie), globine recyclée en acides amines, fer recyclé via la transferrine</li>
<li>10% d'hémolyse intravasculaire physiologique : Hb libre captée par l'<strong>haptoglobine</strong></li>
</ul>`
      },
      {
        title: "Purpura et thrombopénie",
        content: `<h3>Thrombopénie - Définition et fausse thrombopénie</h3>
<ul>
<li><strong>Thrombopénie</strong> : plaquettes &lt; <strong>150 G/L</strong></li>
<li><strong>Toujours éliminer une fausse thrombopénie</strong> en premier :
  <ul>
  <li>Agregation plaquettaire in vitro a l'EDTA (artefact le plus fréquent)</li>
  <li>Verification sur <strong>tube citrate</strong> et examen du <strong>frottis sanguin</strong> (recherche d'amas plaquettaires)</li>
  <li>Macro-plaquettes comptees comme GR par l'automate &rarr; fausse thrombopénie</li>
  </ul>
</li>
<li>Risque hémorragique significatif si plaquettes &lt; <strong>50 G/L</strong></li>
<li>Risque hémorragique spontane si plaquettes &lt; <strong>20 G/L</strong></li>
<li>Le risque depend aussi de la vitesse d'installation et des facteurs associes (fièvre, anticoagulants, gestes invasifs)</li>
</ul>

<h3>Mécanismes de thrombopénie</h3>
<ul>
<li><strong>Centrale</strong> (défaut de production) : aplasie médullaire, envahissement médullaire (leucémies, métastases), myélodysplasie, carence B12/B9, toxiques (alcool, chimiothérapie), myélofibrose
  <ul>
  <li>Myelogramme : mégacaryocytes <strong>diminues ou absents</strong></li>
  <li>Souvent associée a d'autres cytopénies</li>
  </ul>
</li>
<li><strong>Périphérique</strong> (destruction/consommation) :
  <ul>
  <li><strong>Immunologique</strong> : PTI, thrombopénie médicamenteuse, TIH</li>
  <li><strong>Consommation</strong> : CIVD, MAT (PTT, SHU)</li>
  <li><strong>Séquestration</strong> : hypersplenisme (splénomégalie majeure)</li>
  <li><strong>Dilution</strong> : transfusions massives de culots globulaires sans plaquettes</li>
  <li>Myelogramme : mégacaryocytes <strong>nombreux</strong> (production augmentée pour compenser)</li>
  <li>Thrombopénie souvent isolée (pas d'autre cytopénie)</li>
  </ul>
</li>
</ul>

<h3>Purpura - Définition et sémiologie</h3>
<ul>
<li><strong>Purpura</strong> : extravasation de sang hors des vaisseaux dans la peau ou les muqueuses, <strong>ne s'efface PAS a la vitropression</strong> (a la différence de l'erytheme)</li>
<li><strong>Types de lesions</strong> :
  <ul>
  <li><strong>Petechies</strong> : petits points rouges (&lt; 3 mm), plans, non infiltres</li>
  <li><strong>Ecchymoses</strong> : plaques bleu-violace plus etendues (&gt; 3 mm)</li>
  <li><strong>Vibices</strong> : ecchymoses linéaires dans les plis de flexion</li>
  <li><strong>Bulles hémorragiques</strong> muqueuses (buccales, linguales) : <strong>signe de gravité +++</strong> = risque d'hémorragie visceral</li>
  </ul>
</li>
<li><strong>Purpura thrombopénique</strong> : pétéchial, diffus, non infiltre, declive, favorise par la pression</li>
<li><strong>Purpura vasculaire</strong> : infiltre (palpable a la palpation), predominance aux MI, polymorphe, parfois necrotique</li>
</ul>

<h3>Purpura thrombopénique immunologique (PTI)</h3>
<ul>
<li><strong>Définition</strong> : thrombopénie isolée d'origine auto-immune (anticorps anti-plaquettes = anti-GPIIb/IIIa ou anti-GPIb)</li>
<li><strong>Diagnostic d'exclusion</strong> : pas de cause secondaire retrouvée (éliminer LLC, lupus, VIH, VHC, médicaments)</li>
<li>Plaquettes souvent &lt; 30 G/L, <strong>reste de la NFS normal</strong></li>
<li>Myelogramme : moelle riche en mégacaryocytes (non obligatoire si tableau typique chez l'adulte jeune)</li>
<li><strong>Chez l'enfant</strong> : souvent post-viral, aigu, guérison spontanée fréquente (80%)</li>
<li><strong>Chez l'adulte</strong> : évolution plus souvent chronique (&gt; 12 mois)</li>
<li><strong>Traitement</strong> :
  <ul>
  <li><strong>Corticotherapie</strong> (prednisone 1 mg/kg) : première ligne</li>
  <li><strong>Immunoglobulines IV</strong> : si urgence hémorragique (action rapide en 24-48h)</li>
  <li>Splenectomie : si chronique réfractaire (2e ligne)</li>
  <li>Agonistes du récepteur de la TPO (romiplostim, eltrombopag) : stimulent la production plaquettaire</li>
  <li>Rituximab (anti-CD20) : si réfractaire</li>
  </ul>
</li>
</ul>

<h3>Thrombopénie induite par l'héparine (TIH)</h3>
<ul>
<li><strong>TIH de type 1</strong> : non immune, précoce (J1-J4), modérée, bénigne, ne nécessite pas l'arrêt de l'héparine</li>
<li><strong>TIH de type 2</strong> : mécanisme immuno-allergique, <strong>anticorps anti-complexe PF4/héparine</strong>
  <ul>
  <li>Apparition typiquement <strong>5-15 jours</strong> après introduction de l'héparine (ou plus tot si exposition antérieure)</li>
  <li>Chute plaquettaire &gt; 50% par rapport a la valeur initiale</li>
  <li><strong>Risque THROMBOTIQUE</strong> (paradoxal) &gt;&gt; risque hémorragique (activation plaquettaire par les Ac)</li>
  <li>HNF plus a risque que HBPM</li>
  </ul>
</li>
<li>Score de probabilite : <strong>score des 4T</strong> (Thrombopénie, Timing, Thrombose, auTre cause)</li>
<li><strong>Conduite</strong> : arrêt <strong>immédiat</strong> de TOUTE héparine, relais par un anticoagulant alternatif (danaparoïde sodique, argatroban, fondaparinux)</li>
<li>Confirmation biologique : Ac anti-PF4/héparine (ELISA), test fonctionnel d'activation plaquettaire</li>
</ul>

<h3>Microangiopathies thrombotiques (MAT)</h3>
<ul>
<li>Association : anémie hémolytique mécanique (<strong>schizocytes au frottis +++</strong>), thrombopénie de consommation, atteinte d'organe</li>
<li><strong>PTT</strong> (Purpura Thrombotique Thrombopenique) :
  <ul>
  <li>Déficit en <strong>ADAMTS13</strong> (metalloprotease clivant le vWF) : acquis (auto-Ac) ou congenital (Upshaw-Schulman)</li>
  <li>Activité ADAMTS13 &lt; 10%</li>
  <li>Microthrombi plaquettaires riches en vWF diffus</li>
  <li>Atteinte neurologique et rénale</li>
  <li>Urgence vitale : échanges plasmatiques + corticoides + rituximab</li>
  </ul>
</li>
<li><strong>SHU</strong> (Syndrome Hémolytique et Uremique) :
  <ul>
  <li>Atteinte rénale prédominante, souvent post-infectieux chez l'enfant (E. coli O157:H7, toxine Shiga)</li>
  <li>SHU atypique : anomalies de la voie alterne du complement</li>
  </ul>
</li>
</ul>`
      },
      {
        title: "Gammapathies monoclonales",
        content: `<h3>Immunoglobulines - Rappels</h3>
<ul>
<li><strong>Structure</strong> : 2 chaînes lourdes (H) identiques + 2 chaînes légères (L) identiques, kappa ou lambda</li>
<li>Region variable (reconnaissance de l'antigène) + region constante (fonction effectrice)</li>
<li><strong>5 classes (isotypes)</strong> : IgG (75%), IgA (15%), IgM (10%), IgD, IgE (traces)</li>
<li>Produites par les <strong>plasmocytes</strong> (lymphocytes B differencies au stade terminal)</li>
<li><strong>Électrophorese des protéines sériques (EPS)</strong> : migration en 5 fractions (albumine, alpha-1, alpha-2, beta, gamma)</li>
<li>Les Ig migrent dans la zone gamma (d'ou "gammapathie")</li>
</ul>

<h3>Gammapathie monoclonale - Définition et détection</h3>
<ul>
<li><strong>Pic monoclonal</strong> (composant monoclonal) : bande etroite et haute sur l'EPS dans la zone gamma (ou beta pour IgA)</li>
<li>Traduit la sécrétion d'une immunoglobuline <strong>unique</strong> par un <strong>clone de plasmocytes</strong></li>
<li><strong>Immunofixation</strong> : identifiée le type de chaîne lourde et légère (ex : IgG kappa)</li>
<li><strong>Dosage des chaînes légères libres sériques</strong> (ratio kappa/lambda) : détecte même de faibles quantités</li>
<li>Recherche de <strong>protéinurie de Bence-Jones</strong> : chaînes légères libres monoclonales dans les urines (immunofixation urinaire)</li>
<li>Hypogammaglobulinemie associée : diminution des Ig polyclonales normales (immunoparesie)</li>
</ul>

<h3>MGUS (Gammapathie Monoclonale de Signification Indéterminée)</h3>
<ul>
<li>Situation la plus fréquente (découverte fortuite chez le sujet âgé, prévalence 3-4% après 50 ans)</li>
<li><strong>Critères</strong> :
  <ul>
  <li>Composant monoclonal &lt; <strong>30 g/L</strong></li>
  <li>Plasmocytose médullaire &lt; <strong>10%</strong></li>
  <li>Pas d'atteinte d'organe (pas de critères CRAB)</li>
  </ul>
</li>
<li><strong>Risque</strong> : transformation en myélome ou hémopathie lymphoïde (~<strong>1%/an</strong>)</li>
<li><strong>Surveillance</strong> : clinique et biologique régulière (EPS, NFS, créatinine, calcémie) tous les 6 mois puis annuelle</li>
<li>Pas de traitement, surveillance a vie</li>
</ul>

<h3>Myélome multiple (maladie de Kahler)</h3>
<ul>
<li><strong>Définition</strong> : prolifération maligne de plasmocytes clonaux médullaires secretant une immunoglobuline monoclonale</li>
<li>Le plus souvent <strong>IgG</strong> (60%) ou <strong>IgA</strong> (20%), parfois chaînes légères seules (15-20%), rarement IgD, IgE</li>
<li>Age median : 65-70 ans</li>
<li><strong>Critères CRAB</strong> (atteinte d'organe définissant le myélome symptomatique) :
  <ul>
  <li><strong>C</strong> : Calcium élevée (hypercalcémie &gt; 2,75 mmol/L) - par lyse osseuse, libération de calcium</li>
  <li><strong>R</strong> : Rénal (insuffisance rénale, créatinine &gt; 177 micromol/L) - tubulopathie myélomateuse a cylindres, amylose, dépôts</li>
  <li><strong>A</strong> : Anémie (Hb &lt; 10 g/dL) - normocytaire normochrome, envahissement médullaire + cytokines inhibitrices</li>
  <li><strong>B</strong> : Bone (lesions osseuses lytiques, fractures pathologiques, tassements vertebraux) - activation des osteoclastes, inhibition des osteoblastes</li>
  </ul>
</li>
<li>Nouveaux critères SLiM : plasmocytose médullaire &ge; 60%, ratio chaînes légères &ge; 100, &gt; 1 lésion focale IRM</li>
<li><strong>Bilan diagnostique</strong> : EPS + immunofixation (pic monoclonal), dosage Ig quantitatif, chaînes légères libres sériques, myélogramme (&gt; 10% plasmocytes dystrophiques), bilan calcique, créatinine, NFS, LDH, beta-2-microglobuline, imagerie osseuse (TDM corps entier low-dose ou TEP-TDM ou IRM)</li>
</ul>

<h3>Complications du myélome</h3>
<ul>
<li><strong>Insuffisance rénale</strong> : tubulopathie myélomateuse (précipitation des chaînes légères dans les tubules), amylose AL, néphrocalcinose</li>
<li><strong>Infections</strong> : hypogammaglobulinemie fonctionnelle (immunoparesie), première cause de mortalite</li>
<li><strong>Hyperviscosité</strong> : surtout IgA et IgM (troubles visuels, céphalées, épistaxis)</li>
<li><strong>Amylose AL</strong> : dépôts de chaînes légères fibrillaires dans les organes</li>
<li><strong>Complications osseuses</strong> : douleurs, fractures pathologiques, compression médullaire</li>
<li><strong>Hypercalcemie</strong> : confusion, déshydratation, troubles du rythme cardiaque</li>
</ul>

<h3>Traitement du myélome</h3>
<ul>
<li>Patient éligible a l'autogreffe (&lt; 65-70 ans, bon état général) : induction + autogreffe de CSH + consolidation/entretien</li>
<li>Patient non éligible : chimiothérapie adaptée</li>
<li>Molecules : inhibiteurs du proteasome (bortezomib), immunomodulateurs (lenalidomide), anticorps monoclonaux (daratumumab anti-CD38), corticoides</li>
<li>Traitement de support : biphosphonates (lesions osseuses), EPO (anémie), prophylaxie anti-infectieuse</li>
</ul>

<h3>Maladie de Waldenstrom</h3>
<ul>
<li><strong>Lymphome lymphoplasmocytaire</strong> secretant une <strong>IgM monoclonale</strong></li>
<li>Mutation <strong>MYD88 L265P</strong> (>90% des cas)</li>
<li>Association : syndrome tumoral (ADP, splénomégalie), anémie, syndrome d'hyperviscosité</li>
<li>Pic IgM &rarr; risque de syndrome d'<strong>hyperviscosité</strong> (troubles visuels, céphalées, vertiges, épistaxis)</li>
<li>IgM peut avoir une activité auto-immune : agglutinines froides, neuropathie périphérique anti-MAG</li>
</ul>

<h3>Amylose AL</h3>
<ul>
<li>Depot de chaînes légères d'immunoglobulines sous formée <strong>fibrillaire</strong> dans les tissus (le plus souvent lambda)</li>
<li>Atteinte cardiaque (cardiomyopathie restrictive), rénale (protéinurie, syndrome néphrotique), neurologique (neuropathie périphérique), hépatique, macroglossie, purpura periorbitaire</li>
<li>Diagnostic : <strong>coloration au rouge Congo</strong> sur biopsie (biréfringence vert-pomme en lumière polarisée)</li>
<li>Biopsie des glandes salivaires accessoires ou de la graisse abdominale sous-cutanée en première intention</li>
</ul>`
      },
      {
        title: "Hémostase : physiologie et explorations",
        content: `<h3>Définition de l'hémostase</h3>
<ul>
<li><strong>Hémostase</strong> : ensemble des mécanismes permettant d'arrêter un saignement tout en maintenant la fluidité du sang</li>
<li>3 étapes successives et intriquees : <strong>hémostase primaire</strong>, <strong>coagulation</strong> (hémostase secondaire), <strong>fibrinolyse</strong></li>
<li>Équilibre permanent entre processus pro-coagulants et anticoagulants</li>
<li>Déséquilibre : hémorragie (défaut) ou thrombose (excès)</li>
</ul>

<h3>Hémostase primaire</h3>
<ul>
<li><strong>But</strong> : formation du <strong>clou plaquettaire</strong> (thrombus blanc) = premier bouchon hemostatique</li>
<li>Acteurs : endothelium vasculaire, plaquettes, facteur von Willebrand (vWF), fibrinogène</li>
<li><strong>Temps vasculaire</strong> : vasoconstriction réflexe immédiate (endothéline, thromboxane A2)</li>
<li><strong>Adhesion plaquettaire</strong> :
  <ul>
  <li>Lesion endothéliale &rarr; exposition du collagene sous-endothelial</li>
  <li>Le <strong>vWF</strong> fait le pont entre le collagene et le récepteur plaquettaire <strong>GPIb-IX-V</strong></li>
  <li>Liaison directe collagene-GPVI et collagene-GPIa/IIa</li>
  </ul>
</li>
<li><strong>Activation plaquettaire</strong> :
  <ul>
  <li>Changement de formée (disque &rarr; sphere avec pseudopodes)</li>
  <li>Libération du contenu des granules : <strong>ADP</strong>, <strong>thromboxane A2</strong> (TxA2), sérotonine &rarr; amplification et recrutement</li>
  <li>Flip-flop membranaire : externalisation de la phosphatidylserine &rarr; surface procoagulante</li>
  </ul>
</li>
<li><strong>Agregation plaquettaire</strong> : pontage des plaquettes entre elles par le <strong>fibrinogène</strong> via les récepteurs <strong>GPIIb/IIIa</strong> actives</li>
</ul>

<h3>Coagulation (hémostase secondaire)</h3>
<ul>
<li><strong>But</strong> : formation d'un <strong>caillot de fibrine</strong> consolidant le clou plaquettaire</li>
<li>Cascade enzymatique de <strong>facteurs de coagulation</strong> (protéines plasmatiques, synthèse hépatique pour la plupart)</li>
<li><strong>Facteurs vitamine K-dependants</strong> : II (prothrombine), VII, IX, X (et protéines C et S)
  <ul>
  <li>La vitamine K est nécessaire a la gamma-carboxylation de ces facteurs (modification post-traductionnelle indispensable a leur activité)</li>
  </ul>
</li>
<li><strong>Initiation - Voie du facteur tissulaire (voie extrinsèque)</strong> :
  <ul>
  <li>Facteur tissulaire (FT) libérée par les cellules lesees + facteur <strong>VII</strong> &rarr; complexe FT-VIIa</li>
  <li>Active le facteur X (et le facteur IX)</li>
  <li>Explorée par le <strong>TQ/TP</strong> et l'<strong>INR</strong></li>
  </ul>
</li>
<li><strong>Amplification - Voie intrinsèque (voie contact)</strong> :
  <ul>
  <li>Facteurs XII, XI, IX, VIII</li>
  <li>Complexe tenase : <strong>IXa + VIIIa</strong> &rarr; active le facteur X (amplification majeure)</li>
  <li>Explorée par le <strong>TCA</strong></li>
  </ul>
</li>
<li><strong>Voie commune</strong> : facteur Xa + Va (complexe prothrombinase) &rarr; <strong>thrombine (IIa)</strong> &rarr; clive le fibrinogène en <strong>fibrine</strong></li>
<li><strong>Facteur XIII</strong> : stabilise le caillot de fibrine par des liaisons covalentes (reticulation)</li>
<li><strong>Thrombine</strong> : rôle central, amplifie sa propre production (rétrocontrôle positif : active les facteurs V, VIII, XI et les plaquettes)</li>
</ul>

<h3>Régulation de la coagulation (inhibiteurs physiologiques)</h3>
<ul>
<li><strong>Antithrombine (AT)</strong> : inhibe la thrombine (IIa) et le facteur Xa principalement
  <ul>
  <li>Potentialisée par l'<strong>héparine</strong> (x1000) = base du traitement anticoagulant par héparine</li>
  </ul>
</li>
<li><strong>Système protéine C / protéine S</strong> :
  <ul>
  <li>La thrombine se lie a la <strong>thrombomoduline</strong> endothéliale &rarr; active la <strong>protéine C</strong></li>
  <li>La protéine C activée (avec son cofacteur protéine S libre) <strong>inactive les facteurs Va et VIIIa</strong></li>
  <li>Vitamino-K dépendantes</li>
  </ul>
</li>
<li><strong>TFPI</strong> (Tissue Factor Pathway Inhibitor) : inhibe le complexe FT-VIIa-Xa</li>
</ul>

<h3>Fibrinolyse</h3>
<ul>
<li><strong>But</strong> : dissolution du caillot de fibrine une fois la cicatrisation obtenue (repermeabilisation vasculaire)</li>
<li><strong>Plasminogene</strong> &rarr; <strong>plasmine</strong> (active par le <strong>t-PA</strong> endothelial et l'u-PA)</li>
<li>La plasmine dégradé la fibrine en <strong>produits de dégradation de la fibrine (PDF)</strong> dont les <strong>D-dimeres</strong> (spécifiques de la fibrine)</li>
<li>Régulation :
  <ul>
  <li><strong>PAI-1</strong> : inhibiteur du t-PA (principal régulateur)</li>
  <li><strong>Alpha-2 antiplasmine</strong> : inhibe la plasmine libre circulante</li>
  <li><strong>TAFI</strong> : inhibe la fibrinolyse en modifiant la fibrine</li>
  </ul>
</li>
</ul>

<h3>Explorations de l'hémostase</h3>
<ul>
<li><strong>Hémostase primaire</strong> :
  <ul>
  <li>Numeration plaquettaire (NFS)</li>
  <li><strong>Temps de saignement (TS)</strong> : methode d'Ivy (avant-bras sous pression), normal &lt; 10 min. Peu utilise en pratique</li>
  <li><strong>PFA-100</strong> (temps d'occlusion) : plus reproductible, exploré adhesion et agregation plaquettaire in vitro</li>
  </ul>
</li>
<li><strong>Coagulation</strong> :
  <ul>
  <li><strong>TP (Taux de Prothrombine)</strong> : exploré voie extrinsèque + voie commune (VII, X, V, II, fibrinogène). Normal : <strong>70-100%</strong></li>
  <li><strong>INR</strong> : standardisation du TP pour patients sous AVK. Cible habituelle : <strong>2-3</strong></li>
  <li><strong>TCA</strong> : exploré voie intrinsèque + voie commune (XII, XI, IX, VIII, X, V, II, fibrinogène). Ratio malade/temoin &lt; <strong>1,2</strong></li>
  <li><strong>Fibrinogène</strong> : normal <strong>2-4 g/L</strong></li>
  </ul>
</li>
<li><strong>Interprétation</strong> :
  <ul>
  <li>TP bas + TCA normal : déficit en facteur VII isole</li>
  <li>TP normal + TCA allonge : déficit en VIII, IX, XI ou XII (hémophilie)</li>
  <li>TP bas + TCA allonge : déficit voie commune (X, V, II, fibrinogène) ou déficit multiple (AVK, IHC, CIVD)</li>
  </ul>
</li>
<li><strong>Fibrinolyse</strong> : D-dimeres (eleves si activation de la fibrinolyse ou de la coagulation = tres sensible mais peu spécifique)</li>
</ul>`
      },
      {
        title: "Syndrome hémorragique et thrombose veineuse profonde",
        content: `<h3>Syndrome hémorragique - Orientation diagnostique</h3>
<ul>
<li><strong>Interrogatoire cle</strong> : antécédents hémorragiques personnels et familiaux, prise médicamenteuse (anticoagulants, antiagregants, AINS), type de saignement, ancienneté</li>
<li><strong>Hémorragie d'origine hémostase primaire</strong> : saignements <strong>cutaneo-muqueux</strong>, immédiats, superficiels
  <ul>
  <li>Purpura pétéchial, ecchymoses, épistaxis, gingivorragies, ménorragies</li>
  <li>Causes : thrombopénie, thrombopathie, <strong>maladie de Willebrand</strong></li>
  <li>Bilan : NFS (plaquettes), TS/PFA-100, dosage vWF</li>
  </ul>
</li>
<li><strong>Hémorragie d'origine coagulation</strong> : saignements <strong>profonds</strong>, retardes, prolonges
  <ul>
  <li>Hemarthroses, hématomes profonds (musculaires, rétroperitoneaux), hématomes post-operatoires</li>
  <li>Causes : hémophilie A (déficit VIII) ou B (déficit IX), déficit en facteurs, AVK</li>
  <li>Bilan : TP, TCA, fibrinogène, dosage spécifique des facteurs</li>
  </ul>
</li>
</ul>

<h3>Maladie de Willebrand</h3>
<ul>
<li><strong>Maladie hémorragique héréditaire la plus fréquente</strong> (prévalence ~1%)</li>
<li>Déficit quantitatif ou qualitatif du <strong>facteur von Willebrand (vWF)</strong></li>
<li>Transmission <strong>autosomique dominante</strong> (le plus souvent pour types 1 et 2)</li>
<li><strong>Fonctions du vWF</strong> :
  <ul>
  <li>Adhesion plaquettaire : pont collagene sous-endothelial - GPIb plaquettaire</li>
  <li>Transport et protection du <strong>facteur VIII</strong> dans la circulation (le protege de la dégradation)</li>
  </ul>
</li>
<li><strong>Classification</strong> :
  <ul>
  <li><strong>Type 1</strong> (70-80%) : déficit quantitatif <strong>partiel</strong> (diminution proportionnelle vWF:Ag et vWF:Act)</li>
  <li><strong>Type 2</strong> : déficit <strong>qualitatif</strong> (vWF:Act diminué proportionnellement plus que vWF:Ag)
    <ul>
    <li>2A : perte des multimeres de haut poids moléculaire</li>
    <li>2B : affinite augmentée pour GPIb &rarr; consommation &rarr; thrombopénie possible</li>
    <li>2M : diminution de la liaison a GPIb sans perte de multimeres</li>
    <li>2N : diminution de la liaison au facteur VIII (&rarr; mime une hémophilie A)</li>
    </ul>
  </li>
  <li><strong>Type 3</strong> : déficit quantitatif <strong>total</strong> (formée sévère, rare, autosomique récessive)</li>
  </ul>
</li>
<li><strong>Bilan</strong> : TS allonge ou PFA-100 allonge, TCA parfois allonge (si facteur VIII diminué), dosage vWF:Ag, vWF:Act (anciennement vWF:RCo), facteur VIII</li>
<li><strong>Traitement</strong> :
  <ul>
  <li><strong>Desmopressine (DDAVP)</strong> : libérée le vWF des cellules endothéliales, efficace pour types 1 et certains types 2 (test thérapeutique préalable)</li>
  <li>Concentres de vWF (Wilfactin) pour formes sévères ou non repondeuses a la desmopressine</li>
  <li>Acide tranexamique (antifibrinolytique) en complement</li>
  </ul>
</li>
</ul>

<h3>Hémophilies</h3>
<ul>
<li><strong>Hémophilie A</strong> : déficit en facteur <strong>VIII</strong> (80% des cas)</li>
<li><strong>Hémophilie B</strong> : déficit en facteur <strong>IX</strong> (20% des cas, maladie de Christmas)</li>
<li>Transmission récessive <strong>liée a l'X</strong> : garçons atteints, filles conductrices (30% de novo sans antecedent familial)</li>
<li><strong>Classification selon sévérité</strong> :
  <ul>
  <li>Sévère : facteur &lt; <strong>1%</strong> (hémorragies spontanées, hémarthroses récidivantes &rarr; arthropathie)</li>
  <li>Modérée : facteur <strong>1-5%</strong> (hémorragies post-traumatiques)</li>
  <li>Mineure : facteur <strong>5-40%</strong> (hémorragies post-chirurgicales)</li>
  </ul>
</li>
<li><strong>Bilan</strong> : <strong>TCA allonge</strong> isolement, TP <strong>normal</strong>, dosage spécifique des facteurs VIII et IX</li>
<li><strong>Traitement</strong> :
  <ul>
  <li>Concentres de facteur VIII (hémophilie A) ou IX (hémophilie B) : en prophylaxie régulière (formée sévère) ou a la demande</li>
  <li><strong>Emicizumab</strong> : anticorps bispécifique mimant le rôle du facteur VIII (pour hémophilie A, même avec inhibiteur)</li>
  <li>Desmopressine pour hémophilie A mineure</li>
  <li><strong>Complication redoutée</strong> : développément d'<strong>inhibiteurs</strong> (allo-anticorps anti-facteur) rendant le traitement substitutif inefficace</li>
  </ul>
</li>
</ul>

<h3>CIVD (Coagulation Intravasculaire Disséminée)</h3>
<ul>
<li>Activation généralisée et non contrôlée de la coagulation &rarr; microthrombi diffus + consommation des facteurs et plaquettes &rarr; syndrome hémorragique paradoxal</li>
<li><strong>Étiologies</strong> : sepsis (la plus fréquente), cancers (LAM3 +++), complications obstétricales (HRP, embolie amniotique), traumatismes graves, hémopathies malignes</li>
<li><strong>Bilan</strong> : thrombopénie, TP bas, <strong>fibrinogène bas</strong> (consomme), <strong>D-dimeres tres eleves</strong>, facteur V bas, schizocytes possibles</li>
<li><strong>Clinique</strong> : manifestations hémorragiques (purpura, saignements diffus) ET thrombotiques (microthrombi, défaillance d'organes)</li>
<li>Distinction CIVD aiguë (hémorragique) vs CIVD chronique (compensée, plutot thrombotique)</li>
<li><strong>Traitement</strong> : traiter la cause (+++), substitution si hémorragie (plaquettes, PFC, fibrinogène concentré), héparine discutée si thromboses prédominantes</li>
</ul>

<h3>Thrombose veineuse profonde (TVP)</h3>
<ul>
<li><strong>Définition</strong> : formation d'un thrombus dans une veine profonde, le plus souvent aux <strong>membres inférieurs</strong></li>
<li><strong>Triade de Virchow</strong> : stase veineuse, lésion endothéliale, hypercoagulabilité</li>
<li><strong>Facteurs de risque</strong> :
  <ul>
  <li><strong>Acquis</strong> : chirurgie recente, immobilisation prolongée, cancer actif, contraception oestroprogestative, grossesse/post-partum, obesite, voyage prolonge (&gt; 6h), syndrome des antiphospholipides, âge &gt; 60 ans</li>
  <li><strong>Constitutionnels (thrombophilies)</strong> : mutation facteur V Leiden, mutation prothrombine G20210A, déficit en antithrombine/protéine C/protéine S</li>
  </ul>
</li>
<li><strong>Clinique</strong> : douleur du mollet, œdème unilateral, chaleur locale, signe de Homans (douleur a la dorsiflexion du pied - peu spécifique)</li>
<li><strong>Diagnostic</strong> :
  <ul>
  <li><strong>Score de Wells</strong> : évaluation de la probabilite clinique pre-test</li>
  <li><strong>D-dimeres</strong> : si négatifs (&lt; 500 microg/L) ET probabilite faible/intermediaire = <strong>excluent la TVP</strong> (VPN excellente). Si positifs : non spécifiques (augmentés aussi en cas de cancer, grossesse, infection, chirurgie, âge avance)</li>
  <li><strong>Echo-Doppler veineux</strong> : examen de référence (incompressibilite veineuse = diagnostic)</li>
  </ul>
</li>
<li><strong>Complication majeure</strong> : <strong>embolie pulmonaire (EP)</strong> = urgence vitale
  <ul>
  <li>Dyspnée brutale, douleur thoracique, tachycardie, hémoptysie</li>
  <li>Diagnostic : angio-TDM thoracique</li>
  </ul>
</li>
<li><strong>Traitement</strong> :
  <ul>
  <li>Anticoagulation curative : <strong>AOD</strong> (rivaroxaban, apixaban) en première intention ou <strong>HBPM</strong> relais AVK</li>
  <li>Durée : <strong>3-6 mois</strong> minimum, plus longue si facteur de risque persistant (cancer) ou récidive</li>
  <li>Bas de contention élastique (prevention du syndrome post-thrombotique)</li>
  <li>Cas du cancer : HBPM au long cours ou AOD selon recommandations</li>
  </ul>
</li>
</ul>

<h3>Thrombophilies constitutionnelles</h3>
<ul>
<li><strong>Facteur V Leiden</strong> : mutation la plus fréquente (5% caucasiens), <strong>résistance a la protéine C activée</strong>. Risque x5 (hétérozygote) a x50 (homozygote)</li>
<li><strong>Mutation prothrombine G20210A</strong> : augmentation du taux de prothrombine, risque thrombotique x3</li>
<li><strong>Déficit en antithrombine</strong> : risque thrombotique élevée, <strong>résistance a l'héparine</strong> (l'héparine agit via l'AT)</li>
<li><strong>Déficit en protéine C ou S</strong> : risque de <strong>nécrose cutanée sous AVK</strong> (les AVK diminuent la protéine C de demi-vie courte en premier &rarr; état d'hypercoagulabilité transitoire, d'ou l'importance du relais héparinique)</li>
<li><strong>Syndrome des antiphospholipides</strong> (SAPL) : thrombophilie acquise, anticorps antiphospholipides (anti-cardiolipine, anti-beta2GP1, anticoagulant lupique), thromboses artérielles et veineuses + complications obstétricales</li>
<li>Bilan de thrombophilie : a distance de l'épisode aigu (> 3 mois), en dehors de tout traitement anticoagulant, indiqué si TVP avant 50 ans, récidive, localisation inhabituelle, antécédents familiaux</li>
</ul>

<h3>Anticoagulants - Notions essentielles</h3>
<ul>
<li><strong>Heparines</strong> :
  <ul>
  <li>HNF (héparine non fractionnée) : potentialise l'antithrombine, inhibe IIa et Xa. Surveillance : TCA</li>
  <li>HBPM (héparine de bas poids moléculaire) : inhibe principalement Xa via AT. Surveillance : activité anti-Xa (si besoin). Plus pratique (SC, 1-2 injections/j)</li>
  </ul>
</li>
<li><strong>AVK</strong> (warfarine, fluindione, acénocoumarol) : inhibent la vitamine K &rarr; diminuent les facteurs II, VII, IX, X et protéines C et S. Surveillance : <strong>INR</strong> (cible 2-3). Délai d'action 48-72h (nécessite relais héparine initial)</li>
<li><strong>AOD</strong> (Anticoagulants Oraux Directs) :
  <ul>
  <li>Anti-Xa : rivaroxaban, apixaban, edoxaban</li>
  <li>Anti-IIa : dabigatran</li>
  <li>Pas de surveillance biologique en routine, action rapide, peu d'interactions alimentaires</li>
  </ul>
</li>
</ul>`
      }
    ]
  }
};
