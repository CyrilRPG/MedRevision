const REVISION_UE5 = {
  "PHYSIO": {
    name: "Physiologie",
    sections: [
      {
        title: "Physiologie rénale",
        content: `<h3>1. Fonctions du rein et structure</h3>
<ul>
<li><strong>Fonctions principales du rein</strong> :
  <ul>
    <li>Régulation du volume et de la composition du compartiment extracellulaire (homéostasie du milieu intérieur)</li>
    <li>Équilibre acido-basique (avec l'appareil respiratoire)</li>
    <li>Fonction d'émonctoire : excrétion des déchets (urée, acide urique, créatinine)</li>
    <li>Fonction endocrine : rénine (contrôlée PA), érythropoïétine/EPO (production GR en réponse a l'hypoxie), calcitriol (forme active vitamine D)</li>
  </ul>
</li>
<li><strong>Organisation cortico-médullaire</strong> :
  <ul>
    <li>Cortex (périphérique) : contient les glomérules</li>
    <li>Médullaire (interne) : contient les tubules rénaux formant les pyramides de Malpighi</li>
    <li>Colonnes de Bertin : tissu conjonctif entre les lobules rénaux</li>
  </ul>
</li>
<li><strong>Néphron</strong> (unité fonctionnelle) :
  <ul>
    <li>Environ 1 million par rein</li>
    <li>Compose d'un glomérule (dans le cortex) + tubule rénale</li>
    <li>Tubule : tube contourné proximal (TCP) -> tube droit proximal -> anse de Henle (branche descendante fine, ascendante fine, ascendante large) -> tube contourné distal (TCD) -> canal connecteur -> canal collecteur</li>
    <li>Néphrons superficiels : glomérule externe, anse de Henle courte, pas de vasa recta</li>
    <li>Néphrons profonds (juxtamédullaires) : glomérule plus interne, anse de Henle longue atteignant la médullaire interne, vasa recta présentes, rôle dans la concentration/dilution de l'urine</li>
  </ul>
</li>
<li><strong>Glomérule</strong> :
  <ul>
    <li>Zone de contact entre circulation sanguine et espace urinaire</li>
    <li>Artériole afférente -> capillaire glomérulaire (flocculus) -> artériole efférente</li>
    <li>Capsule de Bowman : délimité l'espace urinaire</li>
    <li>Podocytes (pédicelles) recouvrent les capillaires côté urinaire</li>
    <li>Cellules mésangiales : contractiles, peuvent réduire la surface d'échange</li>
    <li>Membrane basale glomérulaire : filtre mécanique (seuil ~60 kDa) ET électrique (chargée négativement)</li>
  </ul>
</li>
<li><strong>Appareil juxta-glomérulaire</strong> :
  <ul>
    <li>Macula densa : cellules sombres du TCD au contact des artérioles</li>
    <li>Cellules myoépithéliales (juxta-glomérulaires) : dans la paroi de l'artériole afférente uniquement, sécrètent la renine, jouent le rôle de barorécepteurs intra-rénaux</li>
    <li>L'artériole efférente n'a PAS de cellules myoépithéliales</li>
  </ul>
</li>
<li><strong>Vascularisation</strong> :
  <ul>
    <li>Système porte artériel : 2 réseaux capillaires en serie (capillaire glomérulaire puis capillaire péritubulaire)</li>
    <li>Trajet : artère arquée -> artériole afférente -> capillaire glomérulaire -> artériole efférente -> capillaire péritubulaire</li>
    <li>Vasa recta : vaisseaux rectilignes longeant l'anse de Henle des néphrons profonds uniquement</li>
    <li>90% du sang irrigue le cortex, 10% la médullaire</li>
  </ul>
</li>
</ul>

<h3>2. Filtration glomérulaire</h3>
<ul>
<li><strong>Débit sanguin rénale (DSR)</strong> : 20% du débit cardiaque = 1200 mL/min</li>
<li><strong>Débit plasmatique rénale (DPR)</strong> : DSR x (1 - hématocrite) = 600 mL/min (pour Ht = 50%)</li>
<li><strong>Débit de filtration glomérulaire (DFG)</strong> : 1/5 du DPR = 120 mL/min = 180 L/jour</li>
<li><strong>Ultrafiltrat glomérulaire</strong> :
  <ul>
    <li>Composition identique au plasma pour les petites molecules (ions, glucose, urée)</li>
    <li>Les grosses protéines (> 60 kDa, dont l'albumine) ne passent PAS</li>
    <li>La filtration depend de la taille (plus c'est gros, moins ca passe) et de la charge (les charges + passent mieux car membrane chargée -)</li>
  </ul>
</li>
<li><strong>Pressions de Starling</strong> (forces motrices de la filtration) :
  <ul>
    <li>Pcap (pression hydrostatique capillaire glomérulaire) = 45 mmHg -> pousse l'eau vers Bowman</li>
    <li>Pi plasmatique (pression oncotique) = 20 mmHg -> retient l'eau dans le capillaire</li>
    <li>P Bowman (pression hydrostatique capsule) = 10 mmHg -> s'oppose a la filtration</li>
    <li>Pi Bowman = 0 (pas de protéines dans l'ultrafiltrat normal)</li>
    <li>Pression d'ultrafiltration (PUF) = Pcap - Pi plasm - P Bowman = 45 - 20 - 10 = 15 mmHg</li>
  </ul>
</li>
<li><strong>DFG = Kf x PUF</strong> ou Kf = surface de filtration x perméabilité hydraulique</li>
<li><strong>Fraction de filtration</strong> = DFG/DPR = 120/600 = 20%</li>
<li><strong>Évolution le long du capillaire</strong> : la pression oncotique augmenté progressivement (car les protéines se concentrent a mesure que l'eau est filtrée) jusqu'a atteindre un point d'équilibre de filtration</li>
<li><strong>Pressions vasculaires</strong> :
  <ul>
    <li>Debut artériole afférente : 100-120 mmHg (pression systémique)</li>
    <li>Capillaire glomérulaire : 40-60 mmHg (constante, élevée pour un capillaire)</li>
    <li>Siege des résistances : artérioles afférentes et efférentes</li>
  </ul>
</li>
</ul>

<h3>3. Régulation du DSR et DFG</h3>
<ul>
<li><strong>Autorégulation intrinsèque</strong> (pour PAM entre 80-180 mmHg) :
  <ul>
    <li>Réflexe myogénique : l'artériole afférente se contracte quand la pression augmenté (et inversement)</li>
    <li>Rétro-contrôlée tubulo-glomérulaire (feedback tubulo-glomérulaire) : la macula densa détecte le débit de NaCl dans le TCD ; si le débit augmenté -> libération d'adénosine -> vasoconstriction de l'artériole afférente -> diminution du DFG</li>
  </ul>
</li>
<li><strong>Régulation extrinsèque</strong> :
  <ul>
    <li>Système nerveux sympathique : vasoconstriction des artérioles afférentes et efférentes -> diminution du DSR</li>
    <li>Angiotensine II : vasoconstriction prédominante de l'artériole efférente -> maintien du DFG malgre la baisse du DSR (augmenté la pression capillaire glomérulaire)</li>
    <li>Prostaglandines (PGE2, PGI2) : vasodilatation de l'artériole afférente -> maintien du DSR ; AINS = inhibent les prostaglandines -> risque d'IRA fonctionnelle</li>
    <li>NO : vasodilatateur</li>
  </ul>
</li>
<li><strong>Stenose de l'artère rénale</strong> (physiopathologie) :
  <ul>
    <li>Diminution de la pression de perfusion en aval</li>
    <li>Activation du SRAA (renine) -> HTA renovasculaire</li>
    <li>IEC/ARA2 : contre-indiqués en cas de sténose bilatérale (risque d'IRA par suppression du maintien du DFG par l'angiotensine II)</li>
  </ul>
</li>
</ul>

<h3>4. Bilan du sodium</h3>
<ul>
<li><strong>Répartition du sodium</strong> :
  <ul>
    <li>Quantité totale : 60 mmol/kg soit ~4 moles pour tout le corps</li>
    <li>1/3 non échangeable (fixe a l'os)</li>
    <li>2/3 échangeables, principalement extracellulaire (95% des cations du MEC)</li>
    <li>Natrémie plasmatique : 142 mmol/L de plasma (151 mmol/kg d'eau)</li>
    <li>Concentration intracellulaire : 12-20 mmol/kg d'eau</li>
  </ul>
</li>
<li><strong>Principe fondamental</strong> : le nombre d'osmoles de Na+ détermine le volume du compartiment extracellulaire (volémie). Ne PAS confondre avec la natrémie (concentration)</li>
<li><strong>Osmolalité extracellulaire</strong> : régulée autour de 300 mOsm/kg d'eau</li>
<li><strong>Entrées-sorties</strong> :
  <ul>
    <li>Entrées : alimentaires 100-200 mmol/24h (sel de cuisine, laitages, pain, charcuterie)</li>
    <li>Sorties extra-rénales (non régulées) : feces (~5 mmol/24h), sueur (5-80 mmol/L, hypoosmotique)</li>
    <li>Sorties rénales (régulées) : ajustement de l'excrétion urinaire pour maintenir un bilan sode nul</li>
  </ul>
</li>
<li><strong>Réabsorption rénale du sodium</strong> :
  <ul>
    <li>Débit de Na+ filtre : [Na+] x DFG ~ 25 000 mmol/j</li>
    <li>99% du Na+ filtre est réabsorbe</li>
    <li>Na+ urinaire = 50-200 mmol/24h (adapte aux apports)</li>
  </ul>
</li>
<li><strong>Tube proximal (60-70%)</strong> :
  <ul>
    <li>Réabsorption isoosmotique : eau et Na+ réabsorbes dans les memes proportions</li>
    <li>2/3 transcellulaire (actif), 1/3 paracellulaire (passif)</li>
    <li>Na/K-ATPase basolaterale : moteur de la réabsorption</li>
    <li>Cotransporteurs apicaux : Na+/glucose, Na+/AA, Na+/phosphates</li>
    <li>Antiport Na+/H+ : rôle dans la réabsorption des bicarbonates via l'anhydrase carbonique</li>
    <li>2eme partie du TCP : réabsorption du Cl- génère une ddp positive luminale -> réabsorption paracellulaire du Na+</li>
    <li>Aquaporines : eau suit les solutes</li>
  </ul>
</li>
<li><strong>Anse de Henle (25%)</strong> :
  <ul>
    <li>Branche descendante fine : perméable a l'eau, peu aux ions</li>
    <li>Branche ascendante fine : peu perméable a l'eau, réabsorption passive Na+/Cl-</li>
    <li>Branche ascendante large (IMPERMÉABLE a l'eau, pas d'aquaporines) :
      <ul>
        <li>Cotransporteur Na+/K+/2Cl- (NKCC2) -> inhibe par le <strong>furosémide</strong></li>
        <li>Antiport Na+/H+ -> inhibe par l'<strong>amiloride</strong></li>
        <li>K+ recyclé crée un gradient électrique positif -> réabsorption paracellulaire de Na+</li>
      </ul>
    </li>
  </ul>
</li>
<li><strong>Tube distal et canal collecteur (10%)</strong> :
  <ul>
    <li>Réabsorption uniquement active, indépendante de l'eau</li>
    <li>Cotransporteur Na+/Cl- -> inhibe par les <strong>thiazidiques</strong></li>
    <li>Canal sodique épithélial ENaC -> inhibe par l'<strong>amiloride</strong> (faible concentration 10^-6 M)</li>
    <li>Lieu principal de la régulation hormonale</li>
  </ul>
</li>
<li><strong>Balance glomérulo-tubulaire</strong> : le rein adapte automatiquement la réabsorption proximale au DFG pour que ~2/3 du filtre soient toujours réabsorbes</li>
<li><strong>Régulation hormonale du canal collecteur</strong> :
  <ul>
    <li><strong>Aldostérone</strong> (mineralocorticoide) : augmenté la réabsorption de Na+ et la sécrétion de K+ via ENaC et Na/K-ATPase dans les cellules principales du canal collecteur</li>
    <li><strong>Facteur natriurétique auriculaire (ANF/ANP)</strong> : libérée par les oreillettes lors de distension -> inhibe la réabsorption de Na+ -> natriurèse ; inhibe la sécrétion de rénine et d'aldostérone</li>
  </ul>
</li>
<li><strong>Physiopathologie</strong> :
  <ul>
    <li>Hyperaldostéronisme primaire (syndrome de Conn) : adénome surrénalien -> excès d'aldostérone -> HTA + hypokaliémie + rénine basse (feedback négatif)</li>
    <li>Hyperaldostéronisme secondaire : activation du SRAA par hypovolémie (insuffisance cardiaque, cirrhose, syndrome néphrotique) -> aldostérone et rénine élevées</li>
  </ul>
</li>
</ul>

<h3>5. Clairance rénale</h3>
<ul>
<li><strong>Définition</strong> : volume de plasma totalement épuré d'une substance par unité de temps (mL/min)</li>
<li><strong>Formule</strong> : Cx = (Ux x V) / Px ou Ux = concentration urinaire, V = débit urinaire, Px = concentration plasmatique</li>
<li><strong>Clairance de l'inuline</strong> :
  <ul>
    <li>Substance exogène, librement filtrée, ni réabsorbée, ni sécrétée, ni métabolisée</li>
    <li>Clairance inuline = DFG = 120 mL/min (gold standard)</li>
  </ul>
</li>
<li><strong>Clairance de la créatinine</strong> :
  <ul>
    <li>Substance endogène, produite par les muscles (proportionnelle a la masse musculaire)</li>
    <li>Librement filtrée + légèrement sécrétée -> surestime le DFG de 10-20%</li>
    <li>En pratique : estimation du DFG par formules (Cockcroft-Gault, MDRD, CKD-EPI)</li>
    <li>Créatininemie normale : 60-105 micromol/L (homme), 45-90 micromol/L (femme)</li>
  </ul>
</li>
<li><strong>Interprétation des clairances</strong> :
  <ul>
    <li>Cx = DFG : substance uniquement filtrée (inuline)</li>
    <li>Cx < DFG : substance filtrée et réabsorbée (glucose, AA, Na+)</li>
    <li>Cx > DFG : substance filtrée et sécrétée (PAH, créatinine)</li>
    <li>Cx = 0 : substance totalement réabsorbée (glucose en conditions normales)</li>
  </ul>
</li>
<li><strong>Clairance du PAH (acide para-amino-hippurique)</strong> :
  <ul>
    <li>Filtre ET secrète : presque totalement extrait du plasma en un seul passage</li>
    <li>Clairance PAH = DPR effectif ~ 600 mL/min</li>
  </ul>
</li>
<li><strong>Transport maximal (Tm)</strong> :
  <ul>
    <li>Glucose : Tm glucose ~ 375 mg/min chez l'homme, 300 mg/min chez la femme</li>
    <li>Seuil rénale du glucose : glycémie ~ 10 mmol/L (1,8 g/L) -> au-dela : glycosurie</li>
    <li>Fraction excrétée (FE) : FEx = Cx/Cin = (Ux x Pcr)/(Px x Ucr) ; permet d'évaluer le traitement rénale net d'une substance</li>
  </ul>
</li>
</ul>

<h3>6. Bilan de l'eau</h3>
<ul>
<li><strong>Répartition de l'eau</strong> :
  <ul>
    <li>Eau totale : 60% du poids corporel (~42 L pour 70 kg)</li>
    <li>Milieu intracellulaire (MIC) : 2/3 = 28 L</li>
    <li>Milieu extracellulaire (MEC) : 1/3 = 14 L (dont plasma 3L, interstitiel 11L)</li>
  </ul>
</li>
<li><strong>Osmolalité</strong> : régulée autour de 285-295 mOsm/kg d'eau (variable régulée)</li>
<li><strong>Entrées d'eau</strong> : boisson (~1500 mL), aliments (~700 mL), eau métabolique (~300 mL) = ~2500 mL/j</li>
<li><strong>Sorties d'eau</strong> : rénale (~1500 mL), cutanée/respiratoire (~900 mL), feces (~100 mL)</li>
<li><strong>Mécanisme de concentration/dilution de l'urine</strong> :
  <ul>
    <li>Gradient cortico-papillaire (GCP) : gradient d'osmolalité croissante du cortex (300 mOsm) a la papille (1200 mOsm)</li>
    <li>Constitue par le système a contre-courant multiplicateur de l'anse de Henle</li>
    <li>Maintenu par les vasa recta (échangeur a contre-courant)</li>
  </ul>
</li>
<li><strong>Système a contre-courant multiplicateur</strong> :
  <ul>
    <li>Branche ascendante large : réabsorption active de NaCl SANS eau (impermeable a l'eau) -> dilution du fluide tubulaire, concentration de l'interstitium</li>
    <li>Branche descendante : perméable a l'eau -> l'eau sort par osmose vers l'interstitium hyperosmotique</li>
    <li>Urée : recirculation dans la médullaire, contribue a ~50% de l'osmolalité papillaire</li>
  </ul>
</li>
<li><strong>Hormone antidiuretique (ADH/vasopressine)</strong> :
  <ul>
    <li>Synthétisée dans l'hypothalamus (noyaux supra-optique et para-ventriculaire)</li>
    <li>Stockée et libérée par la post-hypophyse (neurohypophyse)</li>
    <li>Récepteur V2 (canal collecteur) : insertion d'aquaporines 2 (AQP2) a la membrane apicale -> réabsorption d'eau</li>
    <li>Avec ADH maximale : urine concentrée jusqu'a 1200 mOsm/kg (antidiurèse)</li>
    <li>Sans ADH : urine diluée a ~50-100 mOsm/kg (diurèse aqueuse), volume urinaire jusqu'a 20 L/j</li>
    <li>Osmolalité urinaire normale : 50-1200 mOsm/kg selon l'hydratation</li>
  </ul>
</li>
<li><strong>Régulation de la sécrétion d'ADH</strong> :
  <ul>
    <li>Stimulus principal : osmolalité plasmatique (osmorégulée) ; seuil de déclenchement ~280-285 mOsm/kg</li>
    <li>Stimulants : hyperosmolalité, hypovolémie, hypotension, angiotensine II, douleur, nausées</li>
    <li>Inhibiteurs : hypoosmolalité, hypervolémie, ethanol, ANP</li>
    <li>Soif : déclenchée a des seuils d'osmolalité légèrement supérieurs a ceux de l'ADH</li>
  </ul>
</li>
<li><strong>Clairance de l'eau libre (CH2O)</strong> :
  <ul>
    <li>CH2O = V - Cosm = V - (Uosm x V / Posm)</li>
    <li>CH2O > 0 : excrétion d'eau libre (urine diluée, ex: charge hydrique)</li>
    <li>CH2O < 0 : rétention d'eau libre (urine concentrée, ex: antidiurèse)</li>
    <li>CH2O = 0 : urine isoosmotique au plasma</li>
  </ul>
</li>
</ul>

<h3>7. Équilibre acido-basique</h3>
<ul>
<li><strong>pH artériel normal</strong> : 7.40 (acidose si < 7.38, alcalose si > 7.42)</li>
<li><strong>pH veineux normal</strong> : 7.35</li>
<li><strong>Concentration H+ artérielle</strong> : 40 nmol/L</li>
<li><strong>Equation de Henderson-Hasselbalch</strong> : pH = 6.1 + log([HCO3-] / (0.03 x PCO2))</li>
<li><strong>Valeurs normales</strong> : HCO3- = 24 mmol/L, PCO2 = 40 mmHg</li>
<li><strong>Sources quotidiennes d'ions H+</strong> :
  <ul>
    <li>Acides volatils : CO2 (15-20 000 mmol/j) -> elimine par les poumons</li>
    <li>Acides fixes (non volatils) : 60-80 mmol/j -> elimines par le rein (acide sulfurique, phosphorique, etc.)</li>
  </ul>
</li>
<li><strong>Roles spécifiques du rein</strong> :
  <ul>
    <li>Réabsorption de la quasi-totalité des bicarbonates filtres (4320 mmol/j)</li>
    <li>Excrétion des ions H+ provenant des acides fixes (60-80 mmol/j)</li>
    <li>Régénération de nouveaux bicarbonates</li>
  </ul>
</li>
<li><strong>Réabsorption des bicarbonates filtres</strong> :
  <ul>
    <li>80-85% dans le tube proximal via l'antiport Na+/H+ et l'anhydrase carbonique</li>
    <li>Mécanisme : H+ secreté dans la lumiere reagit avec HCO3- filtre -> H2CO3 -> CO2 + H2O (anhydrase carbonique luminale) -> CO2 diffuse dans la cellule -> reconverti en H+ + HCO3- -> HCO3- réabsorbe vers le sang</li>
    <li>15% dans l'anse de Henle ascendante large</li>
    <li>Transport maximal (Tm) : au-dela d'un seuil, les HCO3- en excès sont excretes dans l'urine (seuil ~26 mmol/L)</li>
  </ul>
</li>
<li><strong>Excrétion des ions H+ et régénération des HCO3-</strong> :
  <ul>
    <li>Acidite titrable : H+ se lie aux tampons urinaires (HPO4²- -> H2PO4-) ; ~30 mmol/j</li>
    <li>Ammonium (NH4+) : NH3 synthetise par le rein (glutaminase) se lie aux H+ ; principal mécanisme adaptable ; ~40 mmol/j normalement, peut augmenter jusqu'a 300 mmol/j en acidose</li>
    <li>Chaque H+ excrete = 1 HCO3- régénére pour le sang</li>
  </ul>
</li>
<li><strong>Canal collecteur et acidification de l'urine</strong> :
  <ul>
    <li>Cellules intercalaires de type A : sécrètent des H+ (H+-ATPase et H+/K+-ATPase apicales), réabsorbent des HCO3- -> acidifient l'urine</li>
    <li>Cellules intercalaires de type B : sécrètent des HCO3- dans la lumiere, réabsorbent des H+ -> alcalinisent l'urine</li>
    <li>pH urinaire minimal : ~4.5</li>
    <li>pH urinaire normal : 5-6 (alimentation carnée acide) a 7-8 (alimentation végétarienne alcaline)</li>
  </ul>
</li>
<li><strong>Réponses rénales adaptées</strong> :
  <ul>
    <li>Acidose métabolique : augmentation de la réabsorption des HCO3-, augmentation de l'excrétion de H+ (surtout NH4+), urine acide</li>
    <li>Alcalose métabolique : diminution de la réabsorption des HCO3- (excrétion urinaire de HCO3-), urine alcaline</li>
    <li>Acidose respiratoire : compensation rénale par augmentation de la réabsorption de HCO3-</li>
    <li>Alcalose respiratoire : compensation rénale par excrétion de HCO3-</li>
  </ul>
</li>
<li><strong>Trou anionique (TA)</strong> : TA = Na+ - (Cl- + HCO3-) ; normal = 12 +/- 4 mmol/L ; augmenté en cas d'acidose métabolique a TA augmenté (acidocetose, acidose lactique, insuffisance rénale, intoxications)</li>
</ul>

<h3>8. Bilan du potassium</h3>
<ul>
<li><strong>Répartition du potassium</strong> :
  <ul>
    <li>Quantité totale : 50 mmol/kg soit ~3500 mmol</li>
    <li>90% intracellulaire (concentration 120-150 mmol/L)</li>
    <li>8% dans l'os (non échangeable)</li>
    <li>2% extracellulaire (~70 mmol)</li>
    <li>Kaliémie normale : 3.5-5.0 mmol/L</li>
    <li>Gradient IC/EC maintenu par la Na+/K+-ATPase</li>
  </ul>
</li>
<li><strong>Entrées</strong> : alimentaires 50-100 mmol/j (fruits, légumes, viande)</li>
<li><strong>Sorties</strong> : rénales 90% (régulées), feces 10%, sueur négligeable</li>
<li><strong>Régulation de la kaliémie</strong> :
  <ul>
    <li><strong>Transfert intra/extracellulaire</strong> (régulation rapide) :
      <ul>
        <li>Insuline : favorise l'entrée de K+ dans les cellules (via Na+/K+-ATPase)</li>
        <li>Catécholamines beta-2 : favorisent l'entrée de K+ dans les cellules</li>
        <li>Aldostérone : favorise l'excrétion rénale de K+</li>
        <li>pH : l'acidose fait sortir le K+ des cellules (hyperkaliémie), l'alcalose fait entrer le K+ (hypokaliémie)</li>
        <li>Osmolalité : l'hyperosmolalité fait sortir le K+ des cellules</li>
      </ul>
    </li>
  </ul>
</li>
<li><strong>Traitement rénale du potassium</strong> :
  <ul>
    <li>TCP : réabsorption de 65% du K+ filtre (paracellulaire, lie a l'eau)</li>
    <li>Anse de Henle : réabsorption de 25% (NKCC2)</li>
    <li>TCD et canal collecteur : site de régulation finale
      <ul>
        <li>Cellules principales : sécrétion de K+ (canal ROMK) sous contrôlée de l'aldostérone</li>
        <li>Cellules intercalaires A : réabsorption de K+ (H+/K+-ATPase)</li>
      </ul>
    </li>
  </ul>
</li>
<li><strong>Déterminants de la sécrétion distale de K+</strong> :
  <ul>
    <li>Aldostérone : stimule ENaC (entrée Na+) et ROMK (sortie K+)</li>
    <li>Débit tubulaire distal : débit élevée = plus de sécrétion de K+</li>
    <li>Kaliémie : hyperkaliémie stimule directement la sécrétion</li>
    <li>Alcalose : favorise la sécrétion de K+</li>
  </ul>
</li>
<li><strong>Hypokaliémie</strong> (K+ < 3.5 mmol/L) :
  <ul>
    <li>Causes : pertes digestives (vomissements, diarrhées), pertes rénales (diurétiques thiazidiques/furosémide, hyperaldostéronisme), transfert intracellulaire (insuline, alcalose, beta-2-agonistes)</li>
    <li>Conséquences : faiblesse musculaire, crampes, paralysie, ileus paralytique, troubles du rythme cardiaque (aplatissement T, onde U, allongement QT, risque de torsade de pointe)</li>
  </ul>
</li>
<li><strong>Hyperkaliémie</strong> (K+ > 5.0 mmol/L) :
  <ul>
    <li>Causes : insuffisance rénale, IEC/ARA2, anti-aldostérone (spironolactone), acidose, rhabdomyolyse, lyse cellulaire, hémorragie digestive</li>
    <li>Conséquences : URGENCE si > 6 mmol/L ; troubles du rythme cardiaque (ondes T pointues, élargissement QRS, FV, arrêt cardiaque), faiblesse musculaire</li>
    <li>Fausse hyperkaliémie : garrot serre, hémolyse du prélèvement</li>
  </ul>
</li>
</ul>

<h3>9. Miction</h3>
<ul>
<li><strong>Définition</strong> : evacuation des urines par la vessie, avec deux phases : continence (rétention) et miction (vidange)</li>
<li><strong>Anatomie fonctionnelle</strong> :
  <ul>
    <li><strong>Détrusor</strong> : muscle lisse de la paroi vésicale, commande vegetative (SNA)</li>
    <li><strong>Sphincter interne</strong> (lisse) : col vesical, commande vegetative (sympathique alpha-adrenergique)</li>
    <li><strong>Sphincter externe</strong> (strie) : commande somatique volontaire (nerf pudendal S2-S4)</li>
  </ul>
</li>
<li><strong>Innervation</strong> :
  <ul>
    <li>Parasympathique (S2-S4, nerf pelvien) : contraction du détrusor (récepteurs muscariniques M3) = miction</li>
    <li>Sympathique (T10-L2, nerf hypogastrique) : relâchement du détrusor (beta-2) + contraction du sphincter interne (alpha-1) = continence</li>
    <li>Somatique (S2-S4, nerf pudendal) : contraction du sphincter externe = continence volontaire</li>
  </ul>
</li>
<li><strong>Phase de remplissage (continence)</strong> :
  <ul>
    <li>Compliance vésicale : la pression reste basse malgre l'augmentation du volume (propriété visco-élastique du détrusor)</li>
    <li>Capacité vésicale : 300-600 mL</li>
    <li>Premier besoin : ~150-250 mL</li>
    <li>Besoin pressant : ~300-400 mL</li>
    <li>Réflexe de garde : activation sympathique et somatique pour maintenir la continence</li>
  </ul>
</li>
<li><strong>Phase de miction</strong> :
  <ul>
    <li>Decision volontaire corticale -> élevée de l'inhibition</li>
    <li>Activation parasympathique -> contraction du détrusor</li>
    <li>Inhibition sympathique -> relâchement sphincter interne</li>
    <li>Relachement du sphincter externe (volontaire)</li>
    <li>Réflexe mictionnel : boucle sacrée (centre mictionnel sacré S2-S4) et contrôlée pontique (centre de Barrington = centre mictionnel pontique)</li>
    <li>Miction complète : pas de residu post-mictionnel normalement</li>
  </ul>
</li>
<li><strong>Troubles mictionnels</strong> :
  <ul>
    <li>Vessie hyperactive : contractions involontaires du détrusor -> urgences mictionnelles, pollakiurie</li>
    <li>Retention urinaire : obstruction (HBP) ou atonie du détrusor</li>
    <li>Incontinence : a l'effort (insuffisance sphinctérienne), par urgenturie (hyperactivité vésicale), par regorgement</li>
    <li>Vessie neurologique : lesions médullaires, sclerose en plaques, neuropathie diabetique</li>
  </ul>
</li>
</ul>

<h3>10. Desordres hydroelectrolytiques</h3>
<ul>
<li><strong>Hyperhydratation extracellulaire (HEC)</strong> :
  <ul>
    <li>Exces de Na+ et d'eau dans le MEC</li>
    <li>Signes : œdèmes, prise de poids, épanchements séreux, HTA</li>
    <li>Causes : insuffisance cardiaque, cirrhose, syndrome néphrotique, insuffisance rénale</li>
    <li>Traitement : restriction sodée, diurétiques</li>
  </ul>
</li>
<li><strong>Déshydratation extracellulaire (DEC)</strong> :
  <ul>
    <li>Perte de Na+ et d'eau du MEC</li>
    <li>Signes : pli cutané, hypotension, tachycardie, veines plates, oligurie</li>
    <li>Causes rénales : diurétiques, néphropathie avec perte de sel, insuffisance surrénale</li>
    <li>Causes extra-rénales : diarrhées, vomissements, 3e secteur, brûlures</li>
    <li>Distinction : natriurèse > 20 mmol/L = perte rénale ; natriurèse < 20 mmol/L = perte extra-rénale</li>
  </ul>
</li>
<li><strong>Hyponatremie</strong> (Na+ < 135 mmol/L) :
  <ul>
    <li>Reflète un excès d'eau relative par rapport au sodium = hypo-osmolalité = hyperhydratation intracellulaire</li>
    <li>Signes : nausées, céphalées, confusion, convulsions, coma (œdème cérébral)</li>
    <li>Causes : SIADH (sécrétion inappropriée d'ADH), potomanie, hypothyroïdie, insuffisance surrénale, diurétiques thiazidiques</li>
    <li>Fausse hyponatrémie : hyperprotidemie, hyperlipedemie (osmolalité normale)</li>
    <li>Correction prudente : risque de myelinolyse centropontine si correction trop rapide (max +8-10 mmol/L par 24h)</li>
  </ul>
</li>
<li><strong>Hypernatremie</strong> (Na+ > 145 mmol/L) :
  <ul>
    <li>Reflète un déficit d'eau relative = hyperosmolalité = déshydratation intracellulaire</li>
    <li>Signes : soif intense, sécheresse des muqueuses, fièvre, troubles de la conscience, convulsions</li>
    <li>Causes : diabète insipide (central ou néphrogenique), pertes hydriques non compensées (fièvre, brûlures, diarrhée osmotique), apports insuffisants (personnes âgées, nourrissons)</li>
    <li>Diabète insipide central : déficit en ADH -> urine diluée abondante ; traitement = desmopressine (analogue ADH)</li>
    <li>Diabète insipide néphrogenique : résistance rénale a l'ADH (lithium, hypercalcémie, hypokaliémie chronique)</li>
  </ul>
</li>
<li><strong>Desordres mixtes</strong> :
  <ul>
    <li>DEC + hyponatrémie : perte de Na+ > perte d'eau</li>
    <li>DEC + hypernatrémie : perte d'eau > perte de Na+</li>
    <li>HEC + hyponatrémie : rétention d'eau > rétention de Na+ (insuffisance cardiaque sévère, cirrhose décompensée)</li>
  </ul>
</li>
</ul>`
      }
    ]
  },
  "ANDROLOGIE": {
    name: "Andrologie",
    sections: [
      {
        title: "Troubles de l'érection et de l'éjaculation",
        content: `<h3>1. Physiologie de l'érection</h3>
<ul>
<li><strong>Définition de l'érection</strong> : phénomène neuro-vasculaire aboutissant a la rigidité de la verge par remplissage sanguin des corps caverneux</li>
<li><strong>Anatomie des corps érectiles</strong> :
  <ul>
    <li>2 corps caverneux (rigidité) : entoures de l'albuginée (tunique fibreuse inextensible)</li>
    <li>1 corps spongieux (entoure l'urètre) : moins rigide, protege l'urètre pendant l'érection</li>
    <li>Artere caverneuse (branche de l'artère pudendale interne) : irriguent les corps caverneux via les artères hélicines</li>
    <li>Tissu érectile : travées de muscle lisse (fibres musculaires lisses) délimitant des espaces sinusoïdes (lacunes vasculaires)</li>
  </ul>
</li>
<li><strong>Mécanisme de l'érection</strong> :
  <ul>
    <li>A l'état flaccide : tonus sympathique alpha-adrenergique maintient les muscles lisses contractes -> faible flux sanguin</li>
    <li>Stimulation : relâchement des fibres musculaires lisses des travées et des artères hélicines</li>
    <li>Mediateur principal : <strong>monoxyde d'azote (NO)</strong> libérée par les terminaisons nerveuses non-adrenergiques non-cholinergiques (NANC) et l'endothelium</li>
    <li>Voie NO -> guanylate cyclase -> GMPc -> relaxation des fibres musculaires lisses -> ouverture des espaces sinusoïdes -> afflux sanguin</li>
    <li>Mécanisme veino-occlusif : les sinusoïdes remplis compriment les veinules sous-albuginales contre l'albuginée -> blocage du retour veineux -> rigidité</li>
    <li><strong>Phosphodiesterase de type 5 (PDE5)</strong> : enzyme qui dégradé le GMPc -> detumescence</li>
  </ul>
</li>
<li><strong>Contrôle nerveux</strong> :
  <ul>
    <li>Centres médullaires érection : S2-S4 (centre parasympathique sacre) et T11-L2 (centre sympathique)</li>
    <li>Érection réflexe : stimulation tactile du gland -> voie afférente (nerf dorsal du penis, nerf pudendal) -> centre sacré -> voie efférente parasympathique (nerfs caverneux)</li>
    <li>Érection psychogène : stimuli visuels, auditifs, fantasmes -> centres cerebraux -> voie sympathique thoraco-lombaire</li>
    <li>Nerfs caverneux : branche du plexus hypogastrique inférieur, cheminent au contact de la prostate (risque de lesion lors de prostatectomie radicale)</li>
  </ul>
</li>
</ul>

<h3>2. Dysfonction érectile (DE)</h3>
<ul>
<li><strong>Définition</strong> : incapacité persistante ou récurrente a obtenir et/ou maintenir une érection suffisante pour une activité sexuelle satisfaisante (durée > 3 mois)</li>
<li><strong>Épidémiologie</strong> : prévalence augmenté avec l'âge ; 5% a 40 ans, 15-20% a 65 ans, > 50% après 70 ans</li>
<li><strong>Étiologies</strong> :
  <ul>
    <li><strong>Organiques (80%)</strong> :
      <ul>
        <li>Vasculaires (atherosclerose, HTA, diabète, dyslipedemie, tabac) : cause la plus fréquente</li>
        <li>Neurologiques : neuropathie diabetique, lesion médullaire, SEP, chirurgie pelvienne (prostatectomie), AVC</li>
        <li>Hormonales : hypogonadisme (testostérone basse), hyperprolactinemie, dysthyroidie</li>
        <li>Anatomiques : maladie de Lapeyronie (fibrose de l'albuginée, courbure de la verge)</li>
        <li>Medicamenteuses : beta-bloquants, antidepresseurs (ISRS), anti-androgènes, antihistaminiques, opiaces</li>
      </ul>
    </li>
    <li><strong>Psychogenes (20%)</strong> : anxiete de performance, depression, conflits conjugaux, stress</li>
    <li>Souvent mixte (organique + psychogène)</li>
  </ul>
</li>
<li><strong>Bilan diagnostique</strong> :
  <ul>
    <li>Interrogatoire : IIEF-5 (score de fonction érectile), ancienneté, circonstances, érections matinales (conservées = en faveur d'une cause psychogène)</li>
    <li>Examen clinique : examen génital, toucher rectal, recherche de signes vasculaires/neurologiques</li>
    <li>Biologie : glycémie, bilan lipidique, testostérone totale (le matin), +/- prolactine, TSH</li>
    <li>Examens complémentaires (2eme intention) : echo-doppler penien, test d'injection intracaverneuse</li>
  </ul>
</li>
<li><strong>Traitements</strong> :
  <ul>
    <li><strong>1ere ligne</strong> : inhibiteurs de la PDE5 (sildenafil, tadalafil, vardenafil) -> empêchent la dégradation du GMPc -> prolongent la relaxation musculaire lisse -> facilitent l'érection. Nécessite une stimulation sexuelle. CI avec dérivés nitrés (risque d'hypotension sévère)</li>
    <li><strong>2eme ligne</strong> : injections intracaverneuses de prostaglandine E1 (alprostadil) -> vasodilatation directe</li>
    <li><strong>3eme ligne</strong> : prothese penienne (implant)</li>
    <li>Traitement étiologique : correction d'un hypogonadisme (testostérone), arrêt de médicaments délétères, prise en charge des facteurs de risque cardiovasculaire</li>
    <li>Prise en charge psychosexuelle (si composante psychogène)</li>
  </ul>
</li>
</ul>

<h3>3. Troubles de l'éjaculation</h3>
<ul>
<li><strong>Physiologie de l'éjaculation</strong> :
  <ul>
    <li>Phase d'emission : contraction des canaux deferents, des vesicules seminales et de la prostate -> propulsion du sperme dans l'urètre prostatique ; contrôlée sympathique (T11-L2)</li>
    <li>Fermeture du col vesical : empeche l'éjaculation rétrograde ; contrôlée sympathique alpha-adrenergique</li>
    <li>Phase d'expulsion : contractions rythmiques des muscles bulbo-caverneux et ischio-caverneux + relaxation du sphincter externe ; contrôlée somatique (nerf pudendal S2-S4)</li>
  </ul>
</li>
<li><strong>Éjaculation prématurée (précoce)</strong> :
  <ul>
    <li>Trouble éjaculatoire le plus fréquent</li>
    <li>Définition : éjaculation survenant avant ou dans la minute suivant la pénétration, avec incapacité a la retarder</li>
    <li>Primaire (de toujours) ou secondaire (acquise)</li>
    <li>Traitement : thérapie comportementale (technique du squeeze/stop-start), ISRS (dapoxétine hors AMM ou off-label), anesthésiques locaux (lidocaïne/prilocaïne en topique)</li>
  </ul>
</li>
<li><strong>Éjaculation retardée / anéjaculation</strong> :
  <ul>
    <li>Difficulté ou impossibilité d'éjaculer malgre une stimulation adéquate</li>
    <li>Causes : neuropathie (diabète), médicaments (ISRS, alpha-bloquants), psychogène, chirurgie pelvienne</li>
  </ul>
</li>
<li><strong>Éjaculation rétrograde</strong> :
  <ul>
    <li>Le sperme va dans la vessie au lieu de sortir par l'urètre (défaut de fermeture du col vesical)</li>
    <li>Causes : chirurgie prostatique (RTUP), neuropathie diabetique, alpha-bloquants</li>
    <li>Diagnostic : spermogramme azoospermique + spermatozoïdes dans les urines post-éjaculatoires</li>
  </ul>
</li>
</ul>`
      }
    ]
  },
  "HISTO": {
    name: "Histologie",
    sections: [
      {
        title: "Appareil génital masculin",
        content: `<h3>1. Vue d'ensemble de l'appareil génital masculin</h3>
<ul>
<li><strong>Composants</strong> :
  <ul>
    <li>Testicules : gonades males (fonction exocrine = spermatogènese + fonction endocrine = steroidogenese)</li>
    <li>Voies génitales excretrices : tubes droits, rete testis, canaux efferents, épididyme, canal deferent, canal éjaculateur, urètre</li>
    <li>Glandes annexes : vesicules seminales, prostate, glandes bulbo-urétrales (de Cowper)</li>
    <li>Organe copulateur : penis</li>
  </ul>
</li>
</ul>

<h3>2. Le testicule</h3>
<ul>
<li><strong>Structure générale</strong> :
  <ul>
    <li>Entoure par l'albuginée (capsule conjonctive dense)</li>
    <li>Divise en 200-300 lobules testiculaires par des cloisons (septula testis)</li>
    <li>Chaque lobule contient 1 a 4 tubes séminifères contournés</li>
    <li>Mediastin du testicule (corps de Highmore) : zone d'ou partent les cloisons, contient le rete testis</li>
  </ul>
</li>
<li><strong>Tubes séminifères</strong> :
  <ul>
    <li>Paroi composée d'un épithélium séminifère + une membrane basale + une gaine péritubulaire (cellules myoides contractiles)</li>
    <li><strong>Cellules de Sertoli</strong> :
      <ul>
        <li>Cellules somatiques de soutien, base a sommet</li>
        <li>Jonctions serrées entre elles = barrière hémato-testiculaire (BHT) séparant compartiment basal et adluminal</li>
        <li>Fonctions : support mécanique et nutritif des cellules germinales, phagocytose des corps résiduels, sécrétion de l'ABP (androgen-binding protein), de l'inhibine (rétrocontrôle négatif FSH), de l'AMH (hormone anti-müllérienne), du fluide testiculaire</li>
        <li>Contrôlées par la FSH et la testostérone</li>
      </ul>
    </li>
    <li><strong>Cellules germinales</strong> (de la base vers la lumiere) :
      <ul>
        <li>Spermatogonies (base, compartiment basal) : type Ad (sombres, cellules souches de réserve), type Ap (pales, cellules souches actives), type B (dernier stade avant méiose)</li>
        <li>Spermatocytes I (compartiment adluminal) : méiose I -> spermatocytes II</li>
        <li>Spermatocytes II : méiose II (tres rapide) -> spermatides rondes</li>
        <li>Spermatides rondes -> spermatides allongées (spermiogénèse) -> spermatozoïdes</li>
      </ul>
    </li>
    <li><strong>Spermiogenese</strong> : transformation de la spermatide ronde en spermatozoïde
      <ul>
        <li>Formation de l'acrosome (dérivée du Golgi)</li>
        <li>Condensation du noyau (protamines remplacent les histones)</li>
        <li>Formation du flagelle (centriole distal)</li>
        <li>Elimination du cytoplasme residuel (corps residuel phagocyte par Sertoli)</li>
      </ul>
    </li>
    <li><strong>Durée de la spermatogènese</strong> : ~74 jours chez l'homme</li>
    <li><strong>Spermiation</strong> : libération des spermatozoïdes dans la lumiere du tube séminifère</li>
  </ul>
</li>
<li><strong>Tissu interstitiel (entre les tubes séminifères)</strong> :
  <ul>
    <li><strong>Cellules de Leydig</strong> :
      <ul>
        <li>Cellules endocrines, cytoplasme éosinophile riche en REL et mitochondries a cretes tubulaires</li>
        <li>Cristalloides de Reinke (inclusions cristallines spécifiques)</li>
        <li>Sécrètent la testostérone (et dérivés) sous le contrôlée de la LH hypophysaire</li>
      </ul>
    </li>
    <li>Vaisseaux sanguins et lymphatiques, fibres nerveuses, macrophages</li>
  </ul>
</li>
<li><strong>Régulation hormonale</strong> :
  <ul>
    <li>Axe hypothalamo-hypophyso-gonadique : GnRH -> FSH + LH</li>
    <li>LH -> cellules de Leydig -> testostérone -> rétrocontrôle négatif sur GnRH et LH</li>
    <li>FSH -> cellules de Sertoli -> spermatogènese + inhibine -> rétrocontrôle négatif sur FSH</li>
  </ul>
</li>
</ul>

<h3>3. Voies excretrices</h3>
<ul>
<li><strong>Tubes droits</strong> : courts, épithélium cubique simple (cellules de Sertoli uniquement)</li>
<li><strong>Rete testis</strong> : réseau de canaux dans le médiastin, épithélium cubique simple avec microvillosités</li>
<li><strong>Canaux efferents</strong> (10-15) : épithélium pseudo-stratifié avec cellules ciliées et non-ciliées (aspect festonné), réabsorption du fluide testiculaire (90%)</li>
<li><strong>Épididyme</strong> :
  <ul>
    <li>Tete, corps, queue</li>
    <li>Épithélium pseudo-stratifié avec stéréocils (longues microvillosités)</li>
    <li>Fonctions : maturation des spermatozoïdes (acquisition de la mobilité), stockage (queue), réabsorption et sécrétion</li>
    <li>Cellules principales (hautes, stéréocils) et cellules basales (petites, a la base)</li>
  </ul>
</li>
<li><strong>Canal deferent</strong> :
  <ul>
    <li>Épithélium pseudo-stratifié avec stéréocils</li>
    <li>Musculeuse tres épaisse (3 couches : longitudinale interne, circulaire moyenne, longitudinale externe)</li>
    <li>Contractions peristaltiques lors de l'éjaculation</li>
    <li>Vasectomie : section du canal deferent (sterilisation masculine)</li>
  </ul>
</li>
</ul>

<h3>4. Glandes annexes</h3>
<ul>
<li><strong>Vesicules seminales</strong> :
  <ul>
    <li>Muqueuse tres plissée, épithélium pseudo-stratifié</li>
    <li>Sécrètent 60-70% du liquide seminal : fructose (source d'énergie pour les spermatozoïdes), prostaglandines, protéines de coagulation (semenogeline)</li>
    <li>Sécrétion dépendante de la testostérone</li>
  </ul>
</li>
<li><strong>Prostate</strong> :
  <ul>
    <li>Glande tubulo-alveolaire, entoure l'urètre prostatique</li>
    <li>3 zones : zone périphérique (70%, cancer), zone de transition (5-10%, HBP), zone centrale (25%)</li>
    <li>Épithélium glandulaire : cellules secretrices luminales (PSA, PAP, zinc, acide citrique, fibrinolysine) + cellules basales + cellules neuroendocrines</li>
    <li>Stroma fibro-musculaire riche en muscle lisse</li>
    <li>Concretions prostatiques (sympexions, corps amylaces) : fréquentes, augmentent avec l'âge</li>
    <li>PSA (antigène spécifique de la prostate) : serine-protéase qui liquefie le sperme coagule</li>
    <li>Sécrétion dépendante de la testostérone (via la DHT et la 5-alpha-reductase)</li>
  </ul>
</li>
<li><strong>Glandes bulbo-urétrales (de Cowper)</strong> : glandes muco-secretantes, sécrètent un mucus lubrifiant pre-éjaculatoire</li>
</ul>

<h3>5. Le sperme</h3>
<ul>
<li><strong>Volume</strong> : 2-6 mL par éjaculat</li>
<li><strong>Composition</strong> : spermatozoïdes (< 10%) + liquide seminal (vesicules seminales 60-70%, prostate 20-30%, glandes bulbo-urétrales, épididyme)</li>
<li><strong>Spermogramme normal (OMS)</strong> : > 15 millions de spermatozoïdes/mL, > 39 millions au total, mobilité progressive > 32%, formes normales > 4%</li>
</ul>`
      }
    ]
  },
  "MED_NUCLEAIRE": {
    name: "Médecine nucléaire",
    sections: [
      {
        title: "Explorations fonctionnelles rénales",
        content: `<h3>1. Principes generaux de la médecine nucléaire rénale</h3>
<ul>
<li><strong>Principe</strong> : administration d'un radiotraceur (substance marquée par un isotope radioactif) qui est capte/elimine par les reins ; détection externe par gamma-camera</li>
<li><strong>Avantages</strong> : exploration fonctionnelle (pas seulement morphologique), évaluation séparée de chaque rein (DFG droit vs gauche), faible irradiation, non invasif</li>
<li><strong>Isotope principal</strong> : technetium 99m (99mTc) ; demi-vie = 6 heures, emission gamma 140 keV</li>
</ul>

<h3>2. Radiotraceurs rénaux</h3>
<ul>
<li><strong>DTPA-99mTc</strong> (acide diethylene-triamine-penta-acetique) :
  <ul>
    <li>Filtre par le glomérule, non réabsorbe, non sécrète</li>
    <li>Equivalent fonctionnel de l'inuline</li>
    <li>Permet de mesurer le DFG</li>
  </ul>
</li>
<li><strong>MAG3-99mTc</strong> (mercapto-acetyl-triglycine) :
  <ul>
    <li>Extraction tubulaire (sécrétion tubulaire proximale principalement)</li>
    <li>Forte extraction rénale : meilleure qualité d'image que le DTPA</li>
    <li>Permet de mesurer le débit plasmatique rénale effectif (DPRE)</li>
    <li>Traceur le plus utilise en pratique (meilleur rapport signal/bruit)</li>
  </ul>
</li>
<li><strong>DMSA-99mTc</strong> (acide dimercaptosuccinique) :
  <ul>
    <li>Fixation corticale rénale (capte par les cellules tubulaires proximales et y reste)</li>
    <li>Scintigraphie rénale statique : évaluation de la masse fonctionnelle corticale de chaque rein</li>
    <li>Indications : cicatrices corticales (pyélonéphrites), rein ectopique, fonction différentielle</li>
  </ul>
</li>
</ul>

<h3>3. Scintigraphie rénale dynamique (renogramme)</h3>
<ul>
<li><strong>Principe</strong> : injection IV du traceur (DTPA ou MAG3) puis acquisition dynamique par gamma-camera pendant 20-30 min</li>
<li><strong>Courbe reno-graphique (renogramme)</strong> : 3 phases :
  <ul>
    <li>Phase vasculaire (0-30 sec) : pic de perfusion rénale, arrivée du traceur</li>
    <li>Phase de captation/concentration (30 sec - 3-5 min) : fixation parenchymateuse, ascension de la courbe</li>
    <li>Phase d'excrétion (> 3-5 min) : elimination urinaire, descente de la courbe</li>
  </ul>
</li>
<li><strong>Temps du pic (Tmax)</strong> : normalement 3-5 min ; allonge en cas d'obstruction</li>
<li><strong>Fonction différentielle</strong> : contribution de chaque rein au DFG total (normal : 45-55% pour chaque rein)</li>
<li><strong>Épreuve au furosémide (test de Whitaker fonctionnel)</strong> :
  <ul>
    <li>Injection de furosémide (1 mg/kg) après 20 min d'acquisition</li>
    <li>Rein normal ou dilate non obstructif : lavage rapide (T1/2 < 10 min)</li>
    <li>Obstruction : stagnation du traceur (T1/2 > 20 min)</li>
    <li>Intermediaire : T1/2 entre 10-20 min (equivoque)</li>
  </ul>
</li>
</ul>

<h3>4. Indications principales</h3>
<ul>
<li><strong>Uropathie obstructive</strong> :
  <ul>
    <li>Évaluation du retentissement fonctionnel d'une dilatation des voies urinaires</li>
    <li>Distinction dilatation obstructive vs non-obstructive (test au furosémide)</li>
    <li>Suivi post-operatoire (pyeloplastie, etc.)</li>
  </ul>
</li>
<li><strong>HTA renovasculaire</strong> :
  <ul>
    <li>Scintigraphie au MAG3 avec test au captopril (IEC)</li>
    <li>Principe : l'IEC supprime l'angiotensine II qui maintenait le DFG du rein sténose</li>
    <li>Résultat positif : baisse de la captation du côté sténose après captopril = confirmation d'une sténose fonctionnellement significative</li>
    <li>Utilisé pour évaluer le bénéfice attendu d'une revascularisation</li>
  </ul>
</li>
<li><strong>Insuffisance rénale</strong> : évaluation de la fonction rénale séparée, décision thérapeutique (néphrectomie possible si rein controlatéral compense)</li>
<li><strong>Transplantation rénale</strong> : suivi du greffon, détection précoce de rejet ou complication vasculaire</li>
<li><strong>Reflux vesico-uretèral chez l'enfant</strong> : cystographie isotopique (moins irradiante que la cystographie radiologique)</li>
<li><strong>Rein ectopique / agénesie</strong> : localisation et évaluation fonctionnelle</li>
</ul>

<h3>5. Mesure du DFG isotopique</h3>
<ul>
<li><strong>Methode de référence</strong> : clearance plasmatique du 51Cr-EDTA ou du 99mTc-DTPA (prélèvements sanguins multiples après injection)</li>
<li><strong>DFG normal</strong> : 90-120 mL/min/1.73 m2</li>
<li><strong>Avantage par rapport aux formules</strong> : mesure directe, plus précise, indépendante de la masse musculaire ; indiqué en cas de doute diagnostique, avant don de rein, ou dosage de chimiothérapie néphrotoxique</li>
</ul>`
      }
    ]
  },
  "SEMIO_MED": {
    name: "Sémiologie médicale",
    sections: [
      {
        title: "Sémiologie médicale néphrologique",
        content: `<h3>1. Mesure de la pression artérielle</h3>
<ul>
<li><strong>PA normale</strong> : < 140/90 mmHg en consultation, < 135/85 mmHg en automesure, < 130/80 mmHg en MAPA (moyenne sur 24h)</li>
<li><strong>HTA</strong> : PA >= 140/90 mmHg confirmée par mesures répétées ou MAPA/automesure</li>
<li><strong>Classification de l'HTA</strong> :
  <ul>
    <li>Grade 1 : 140-159 / 90-99 mmHg</li>
    <li>Grade 2 : 160-179 / 100-109 mmHg</li>
    <li>Grade 3 : >= 180 / >= 110 mmHg</li>
  </ul>
</li>
<li><strong>Conditions de mesure</strong> : repos 5 min, assis, bras a hauteur du coeur, brassard adapte, 2 a 3 mesures espacées de 1-2 min, retenir la moyenne des 2 dernières</li>
<li><strong>Hypotension orthostatique</strong> : baisse de la PAS >= 20 mmHg et/ou PAD >= 10 mmHg dans les 3 min suivant le passage en position debout</li>
<li><strong>MAPA (Holter tensionnel)</strong> : mesures automatiques sur 24h ; eveil PA < 135/85, sommeil PA < 120/70, moyenne 24h < 130/80</li>
<li><strong>Effet blouse blanche</strong> : PA élevée en consultation, normale en MAPA</li>
<li><strong>HTA masquée</strong> : PA normale en consultation, élevée en MAPA</li>
</ul>

<h3>2. Hydratation extracellulaire</h3>
<ul>
<li><strong>Volume extracellulaire (VEC)</strong> : détermine par le contenu en sodium de l'organisme</li>
<li><strong>Évaluation clinique du VEC</strong> :
  <ul>
    <li>Hyperhydratation extracellulaire (excès de Na+) : œdèmes périphériques déclives (chevilles, region sacrée), anasarque, épanchements séreux (ascite, pleurésie), prise de poids, HTA, turgescence jugulaire</li>
    <li>Déshydratation extracellulaire (déficit de Na+) : pli cutané, hypotension artérielle, tachycardie, veines plates (jugulaires), oligurie, perte de poids, sécheresse cutanée</li>
  </ul>
</li>
<li><strong>Œdèmes</strong> :
  <ul>
    <li>Mécanisme : augmentation de la pression hydrostatique capillaire OU diminution de la pression oncotique OU augmentation de la perméabilité capillaire OU obstruction lymphatique</li>
    <li>Œdèmes généralises : insuffisance cardiaque, syndrome néphrotique, cirrhose, insuffisance rénale</li>
    <li>Œdèmes localisés : TVP, lymphoedème, inflammation locale</li>
    <li>Signe du godet : depression persistante après pression digitale (œdème d'origine hydrostatique/oncotique)</li>
  </ul>
</li>
</ul>

<h3>3. Proteinurie</h3>
<ul>
<li><strong>Définition</strong> : présence anormale de protéines dans les urines</li>
<li><strong>Valeurs normales</strong> : protéinurie physiologique < 150 mg/24h (dont albumine < 30 mg/24h)</li>
<li><strong>Depistage</strong> : bandelette urinaire (BU) -> détecte principalement l'albumine (seuil ~300 mg/L)</li>
<li><strong>Confirmation</strong> : rapport protéinurie/créatininurie (P/C) sur echantillon ou protéinurie des 24h</li>
<li><strong>Seuils pathologiques</strong> :
  <ul>
    <li>Microalbuminurie : 30-300 mg/24h (signe précoce de néphropathie diabetique ou atteinte glomérulaire debutante)</li>
    <li>Proteinurie significative : > 300 mg/24h ou P/C > 300 mg/g</li>
    <li>Proteinurie néphrotique : > 3 g/24h</li>
  </ul>
</li>
<li><strong>Types de protéinurie</strong> :
  <ul>
    <li>Glomérulaire : albumine prédominante (sélective si essentiellement albumine, non sélective si toutes les protéines passent) ; causes : syndrome néphrotique, glomérulonéphrites</li>
    <li>Tubulaire : protéines de faible poids moléculaire (beta-2-microglobuline, retinol-binding protein) ; causes : tubulopathies, néphrites interstitielles</li>
    <li>De surcharge (pre-rénale) : excès de production d'une protéine filtrée (chaînes légères libres dans le myélome = protéinurie de Bence-Jones)</li>
  </ul>
</li>
<li><strong>Faux positifs de la BU</strong> : urines tres concentrées, pH alcalin, contamination par antiseptiques</li>
<li><strong>Syndrome néphrotique</strong> : protéinurie > 3 g/24h + albuminémie < 30 g/L ; pur si pas d'hématurie, d'HTA, d'insuffisance rénale</li>
</ul>

<h3>4. Hématurie</h3>
<ul>
<li><strong>Définition</strong> : présence de sang (hématies) dans les urines</li>
<li><strong>Hématurie microscopique</strong> : > 10 hématies/mm3 (ou > 10 000/mL) ; découverte par BU (seuil ~5 GR/mm3) puis confirmation par ECBU</li>
<li><strong>Hématurie macroscopique</strong> : visible a l'oeil nu (urines rouges, brunes ou rosées)</li>
<li><strong>Faux positifs de la BU</strong> : myoglobinurie (rhabdomyolyse), hemoglobinurie (hémolyse intravasculaire), betteraves, porphyrie, règles</li>
<li><strong>Origine glomérulaire vs urologique</strong> :
  <ul>
    <li>Glomérulaire : hématies déformées (acanthocytes), cylindres hématiques, protéinurie associée, couleur brun-coca ; causes : glomérulonéphrites (néphropathie a IgA, etc.)</li>
    <li>Urologique : hématies non déformées, caillots, début ou fin de miction (initiale/terminale), douleur lombaire ; causes : lithiase, tumeur vésicale/rénale, infection urinaire, HBP</li>
  </ul>
</li>
<li><strong>Hématurie transitoire bénigne</strong> : effort physique intense, fièvre, rapports sexuels</li>
<li><strong>Bilan d'hématurie</strong> : ECBU, cytologie urinaire, échographie réno-vésicale, uroscanner, cystoscopie (si > 40-50 ans pour éliminer une tumeur)</li>
</ul>

<h3>5. Insuffisance rénale chronique (IRC)</h3>
<ul>
<li><strong>Définition</strong> : diminution irreversible du DFG evoluant depuis plus de 3 mois</li>
<li><strong>Classification KDIGO (stades)</strong> :
  <ul>
    <li>Stade 1 : DFG >= 90 mL/min/1.73m2 (maladie rénale avec DFG normal)</li>
    <li>Stade 2 : DFG 60-89 (insuffisance rénale légère)</li>
    <li>Stade 3a : DFG 45-59 (modérée)</li>
    <li>Stade 3b : DFG 30-44 (modérée a sévère)</li>
    <li>Stade 4 : DFG 15-29 (sévère)</li>
    <li>Stade 5 : DFG < 15 (terminale, dialyse ou greffe)</li>
  </ul>
</li>
<li><strong>Critères de chronicité</strong> : DFG < 60 mL/min et/ou anomalies rénales (protéinurie, hématurie, anomalies morphologiques) depuis > 3 mois ; reins de petite taille a l'échographie (< 10 cm), dédifférenciation cortico-médullaire, anémie, hyperphosphatémie, hypocalcémie</li>
<li><strong>Étiologies principales</strong> :
  <ul>
    <li>Néphropathie diabetique (cause n°1)</li>
    <li>Néphropathie vasculaire (HTA, néphroangiosclerose)</li>
    <li>Glomérulonéphrites chroniques</li>
    <li>Néphropathie interstitielle chronique (pyélonéphrite chronique, toxiques)</li>
    <li>Polykystose rénale (PKRAD, héréditire AD)</li>
  </ul>
</li>
<li><strong>Conséquences de l'IRC</strong> :
  <ul>
    <li>Retention des toxines uremiques : urée, créatinine</li>
    <li>Troubles hydro-électrolytiques : hyperkaliémie, acidose métabolique, rétention hydro-sodée (HTA, œdèmes)</li>
    <li>Anémie : déficit en EPO -> anémie normochrome normocytaire arégénérative</li>
    <li>Troubles phospho-calciques : hyperphosphatémie, hypocalcémie, déficit en calcitriol (vitamine D active), hyperparathyroidie secondaire, osteodystrophie rénale</li>
    <li>Risque cardiovasculaire majeur (1ere cause de mortalite des IRC)</li>
    <li>Hyperuricemie, denutrition, troubles neurologiques (encephalopathie, neuropathie périphérique)</li>
  </ul>
</li>
<li><strong>Prise en charge</strong> :
  <ul>
    <li>Ralentir la progression : contrôlée PA (< 130/80, IEC ou ARA2 si protéinurie), équilibre glycémique, régime hypoprotidique modéré, traitement de la protéinurie</li>
    <li>Traitement des complications : EPO et fer (anémie), chelateurs du phosphore + vitamine D (troubles phospho-calciques), bicarbonates (acidose), régime pauvre en K+ (hyperkaliémie)</li>
    <li>Stade terminal : dialyse (hemodialyse ou dialyse peritoneale) ou transplantation rénale</li>
  </ul>
</li>
</ul>

<h3>6. Insuffisance rénale aiguë fonctionnelle (IRA fonctionnelle)</h3>
<ul>
<li><strong>Définition</strong> : elevation rapide de la créatinine (> 26.5 micromol/L en 48h ou > 50% en 7 jours) par baisse de la perfusion rénale, SANS lesion du parenchyme rénale</li>
<li><strong>Physiopathologie</strong> : diminution de la pression de perfusion rénale -> baisse du DFG -> le rein est fonctionnellement intact (réabsorbe le Na+ et l'eau pour compenser) -> IRA reversible a la correction de la cause</li>
<li><strong>Causes</strong> :
  <ul>
    <li>Hypovolémie vraie : déshydratation (diarrhées, vomissements), hémorragie, brûlures, 3e secteur</li>
    <li>Hypovolémie relative (diminution du volume circulant effectif) : insuffisance cardiaque, cirrhose décompensée, syndrome néphrotique sévère, choc septique</li>
    <li>Atteinte hemodynamique intra-rénale : AINS (inhibent les prostaglandines vasodilatatrices de l'artériole afférente), IEC/ARA2 (suppriment la vasoconstriction de l'artériole efférente par l'angiotensine II)</li>
  </ul>
</li>
<li><strong>Critères diagnostiques biologiques (IRA fonctionnelle vs organique)</strong> :
  <ul>
    <li><strong>IRA fonctionnelle</strong> :
      <ul>
        <li>Natriurese < 20 mmol/L (Na+ réabsorbe)</li>
        <li>FE Na < 1%</li>
        <li>Osmolalité urinaire > 500 mOsm/kg (urine concentrée)</li>
        <li>Rapport urée urinaire/urée plasmatique > 10</li>
        <li>Rapport créatinine urinaire/créatinine plasmatique > 30</li>
        <li>Urée/créatinine plasmatique > 100 (urée augmentée de façon disproportionnée car réabsorbée)</li>
      </ul>
    </li>
    <li><strong>IRA organique (nécrose tubulaire aiguë)</strong> :
      <ul>
        <li>Natriurese > 40 mmol/L</li>
        <li>FE Na > 2%</li>
        <li>Osmolalité urinaire < 350 mOsm/kg (urine non concentrée)</li>
        <li>Rapport urée U/P < 10</li>
        <li>Rapport créatinine U/P < 20</li>
      </ul>
    </li>
  </ul>
</li>
<li><strong>Diagnostic différentiel IRA</strong> :
  <ul>
    <li>IRA pre-rénale (fonctionnelle) : 55-60% des IRA ; reversible</li>
    <li>IRA rénale (organique/parenchymateuse) : nécrose tubulaire aiguë (ischémique, toxique), glomérulonéphrite rapidement progressive, néphrite interstitielle aigue</li>
    <li>IRA post-rénale (obstructive) : lithiase, tumeur, hypertrophie prostatique -> dilatation des voies urinaires a l'échographie</li>
  </ul>
</li>
<li><strong>Traitement de l'IRA fonctionnelle</strong> :
  <ul>
    <li>Restauration de la volémie : remplissage par sérum physiologique (NaCl 0.9%)</li>
    <li>Arret des médicaments néphrotoxiques (AINS, IEC/ARA2 temporairement, aminosides)</li>
    <li>Traitement de la cause sous-jacente</li>
    <li>Critère de réponse : amélioration de la créatinine et de la diurèse après remplissage</li>
  </ul>
</li>
<li><strong>Urgences de l'IRA</strong> :
  <ul>
    <li>Hyperkaliémie menacante (ECG)</li>
    <li>Surcharge hydrosodée avec OAP</li>
    <li>Acidose métabolique sévère</li>
    <li>Indication de dialyse en urgence si echec du traitement conservateur</li>
  </ul>
</li>
</ul>`
      }
    ]
  }
};
