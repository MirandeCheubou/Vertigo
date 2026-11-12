// Jeu de données fictif (simule l'export GESTOCK). Même structure que donnees_vertigo.json.
window.DONNEES = {
  "meta": {
    "description": "Jeu de données fictif simulant l'export GESTOCK (maquette Vertigo Sport)",
    "genere_le": "2026-11-03",
    "frequence_synchronisation_minutes": 15,
    "seuil_stock_faible": 3
  },
  "categories": [
    {
      "id": 1,
      "nom": "Running"
    },
    {
      "id": 2,
      "nom": "Fitness"
    },
    {
      "id": 3,
      "nom": "Sports collectifs"
    },
    {
      "id": 4,
      "nom": "Outdoor"
    }
  ],
  "magasins": [
    {
      "id": 1,
      "code_gestock": "MAG01",
      "nom": "Vertigo Sport Angers (siège)",
      "ville": "Angers",
      "code_postal": "49000",
      "adresse": "12 avenue des Sports",
      "telephone": "02 41 00 00 01",
      "horaires": "Lun-Sam 9h30-19h"
    },
    {
      "id": 2,
      "code_gestock": "MAG02",
      "nom": "Vertigo Sport Nantes",
      "ville": "Nantes",
      "code_postal": "44000",
      "adresse": "8 rue de l'Élan",
      "telephone": "02 40 00 00 02",
      "horaires": "Lun-Sam 9h30-19h30"
    },
    {
      "id": 3,
      "code_gestock": "MAG03",
      "nom": "Vertigo Sport Le Mans",
      "ville": "Le Mans",
      "code_postal": "72000",
      "adresse": "25 boulevard du Stade",
      "telephone": "02 43 00 00 03",
      "horaires": "Lun-Sam 9h30-19h"
    },
    {
      "id": 4,
      "code_gestock": "MAG04",
      "nom": "Vertigo Sport Cholet",
      "ville": "Cholet",
      "code_postal": "49300",
      "adresse": "4 place des Coureurs",
      "telephone": "02 41 00 00 04",
      "horaires": "Mar-Sam 10h-19h"
    },
    {
      "id": 5,
      "code_gestock": "MAG05",
      "nom": "Vertigo Sport Saint-Nazaire",
      "ville": "Saint-Nazaire",
      "code_postal": "44600",
      "adresse": "17 avenue de l'Océan",
      "telephone": "02 40 00 00 05",
      "horaires": "Lun-Sam 9h30-19h"
    },
    {
      "id": 6,
      "code_gestock": "MAG06",
      "nom": "Vertigo Sport La Roche-sur-Yon",
      "ville": "La Roche-sur-Yon",
      "code_postal": "85000",
      "adresse": "9 rue des Alizés",
      "telephone": "02 51 00 00 06",
      "horaires": "Mar-Sam 10h-19h"
    }
  ],
  "articles": [
    {
      "id": 1,
      "reference_gestock": "VS-RUN-0001",
      "nom": "Chaussures de running route Vélocité 3",
      "marque": "Kalmar",
      "categorie_id": 1,
      "description": "Chaussures légères et amorties pour les sorties route, du 5 km au semi-marathon.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 2,
      "reference_gestock": "VS-RUN-0002",
      "nom": "Chaussures de trail Sentier GT",
      "marque": "Trailix",
      "categorie_id": 1,
      "description": "Semelle crantée et protection avant pour les chemins techniques.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 3,
      "reference_gestock": "VS-RUN-0003",
      "nom": "Short de running homme Allure",
      "marque": "Altis",
      "categorie_id": 1,
      "description": "Short respirant avec poche zippée et slip intégré.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 4,
      "reference_gestock": "VS-RUN-0004",
      "nom": "Veste coupe-vent running Rafale",
      "marque": "Nordik",
      "categorie_id": 1,
      "description": "Veste ultra-légère, déperlante, qui se range dans sa poche.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 5,
      "reference_gestock": "VS-RUN-0005",
      "nom": "Ceinture porte-bidon Hydro",
      "marque": "Altis",
      "categorie_id": 1,
      "description": "Ceinture ajustable avec bidon de 500 ml et poche pour smartphone.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 6,
      "reference_gestock": "VS-FIT-0001",
      "nom": "Tapis de yoga confort 6 mm",
      "marque": "Vertigo",
      "categorie_id": 2,
      "description": "Tapis antidérapant, 6 mm d'épaisseur, avec sangle de transport.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 7,
      "reference_gestock": "VS-FIT-0002",
      "nom": "Haltères réglables 2 x 10 kg",
      "marque": "Kalmar",
      "categorie_id": 2,
      "description": "Paire d'haltères à poids réglable pour le renforcement à domicile.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 8,
      "reference_gestock": "VS-FIT-0003",
      "nom": "Élastiques de résistance (lot de 5)",
      "marque": "Altis",
      "categorie_id": 2,
      "description": "Cinq niveaux de résistance pour la musculation et la rééducation douce.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 9,
      "reference_gestock": "VS-FIT-0004",
      "nom": "Corde à sauter vitesse",
      "marque": "Altis",
      "categorie_id": 2,
      "description": "Corde à roulements, longueur réglable, poignées antidérapantes.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 10,
      "reference_gestock": "VS-FIT-0005",
      "nom": "Roue d'abdominaux Core",
      "marque": "Kalmar",
      "categorie_id": 2,
      "description": "Roue à double appui avec tapis de genoux fourni.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 11,
      "reference_gestock": "VS-COL-0001",
      "nom": "Ballon de football taille 5 Match",
      "marque": "Kalmar",
      "categorie_id": 3,
      "description": "Ballon cousu main, taille 5, pour terrains synthétiques et herbe.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 12,
      "reference_gestock": "VS-COL-0002",
      "nom": "Ballon de basket taille 7 Dunk",
      "marque": "Altis",
      "categorie_id": 3,
      "description": "Ballon grip, usage intérieur et extérieur.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 13,
      "reference_gestock": "VS-COL-0003",
      "nom": "Ballon de handball taille 2 Passe",
      "marque": "Kalmar",
      "categorie_id": 3,
      "description": "Ballon de handball adulte, résine antidérapante.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 14,
      "reference_gestock": "VS-COL-0004",
      "nom": "Chaussures de volley Smash",
      "marque": "Nordik",
      "categorie_id": 3,
      "description": "Semelle gomme et renforts latéraux pour les appuis en salle.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 15,
      "reference_gestock": "VS-OUT-0001",
      "nom": "Tente 2 places Bivouac 2",
      "marque": "Nordik",
      "categorie_id": 4,
      "description": "Tente de randonnée 2 places, 2,3 kg, montage rapide.",
      "est_louable": true,
      "actif": true
    },
    {
      "id": 16,
      "reference_gestock": "VS-OUT-0002",
      "nom": "Tente 4 places Famille 4",
      "marque": "Nordik",
      "categorie_id": 4,
      "description": "Tente familiale avec chambre séparée et grand vestibule.",
      "est_louable": true,
      "actif": true
    },
    {
      "id": 17,
      "reference_gestock": "VS-OUT-0003",
      "nom": "Sac de couchage confort 0 °C",
      "marque": "Trailix",
      "categorie_id": 4,
      "description": "Sac de couchage momie, confort 0 °C, avec housse de compression.",
      "est_louable": true,
      "actif": true
    },
    {
      "id": 18,
      "reference_gestock": "VS-OUT-0004",
      "nom": "Sac à dos de randonnée 50 L",
      "marque": "Trailix",
      "categorie_id": 4,
      "description": "Sac 50 L avec dos aéré, ceinture ventrale et housse de pluie.",
      "est_louable": true,
      "actif": true
    },
    {
      "id": 19,
      "reference_gestock": "VS-OUT-0005",
      "nom": "Bâtons de randonnée (paire)",
      "marque": "Nordik",
      "categorie_id": 4,
      "description": "Bâtons télescopiques en aluminium avec dragonnes.",
      "est_louable": true,
      "actif": true
    },
    {
      "id": 20,
      "reference_gestock": "VS-OUT-0006",
      "nom": "Lampe frontale Lumen 300",
      "marque": "Trailix",
      "categorie_id": 4,
      "description": "Lampe rechargeable de 300 lumens, 3 modes d'éclairage.",
      "est_louable": false,
      "actif": true
    },
    {
      "id": 21,
      "reference_gestock": "VS-OUT-0007",
      "nom": "Gourde isotherme 750 ml",
      "marque": "Vertigo",
      "categorie_id": 4,
      "description": "Gourde inox isotherme, garde le froid 24 h et le chaud 12 h.",
      "est_louable": false,
      "actif": true
    }
  ],
  "stocks": [
    {
      "article_id": 1,
      "magasin_id": 1,
      "prix": 119.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 1,
      "magasin_id": 2,
      "prix": 119.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 1,
      "magasin_id": 3,
      "prix": 119.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 1,
      "magasin_id": 4,
      "prix": 119.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 1,
      "magasin_id": 5,
      "prix": 108.9,
      "quantite": 11,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 1,
      "magasin_id": 6,
      "prix": 119.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 2,
      "magasin_id": 1,
      "prix": 121.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 2,
      "magasin_id": 2,
      "prix": 134.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 2,
      "magasin_id": 3,
      "prix": 134.9,
      "quantite": 2,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 2,
      "magasin_id": 4,
      "prix": 134.9,
      "quantite": 15,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 2,
      "magasin_id": 5,
      "prix": 134.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 2,
      "magasin_id": 6,
      "prix": 134.9,
      "quantite": 6,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 3,
      "magasin_id": 1,
      "prix": 29.9,
      "quantite": 2,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 3,
      "magasin_id": 2,
      "prix": 29.9,
      "quantite": 22,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 3,
      "magasin_id": 3,
      "prix": 29.9,
      "quantite": 15,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 3,
      "magasin_id": 4,
      "prix": 29.9,
      "quantite": 16,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 3,
      "magasin_id": 5,
      "prix": 29.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 3,
      "magasin_id": 6,
      "prix": 29.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 4,
      "magasin_id": 1,
      "prix": 59.9,
      "quantite": 17,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 4,
      "magasin_id": 2,
      "prix": 59.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 4,
      "magasin_id": 3,
      "prix": 59.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 4,
      "magasin_id": 4,
      "prix": 59.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 4,
      "magasin_id": 5,
      "prix": 59.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 4,
      "magasin_id": 6,
      "prix": 59.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 5,
      "magasin_id": 1,
      "prix": 24.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 5,
      "magasin_id": 2,
      "prix": 24.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 5,
      "magasin_id": 3,
      "prix": 24.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 5,
      "magasin_id": 4,
      "prix": 24.9,
      "quantite": 13,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 5,
      "magasin_id": 5,
      "prix": 24.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 5,
      "magasin_id": 6,
      "prix": 24.9,
      "quantite": 10,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 6,
      "magasin_id": 1,
      "prix": 24.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 6,
      "magasin_id": 2,
      "prix": 24.9,
      "quantite": 18,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 6,
      "magasin_id": 3,
      "prix": 24.9,
      "quantite": 15,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 6,
      "magasin_id": 4,
      "prix": 24.9,
      "quantite": 2,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 6,
      "magasin_id": 5,
      "prix": 24.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 6,
      "magasin_id": 6,
      "prix": 24.9,
      "quantite": 5,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 7,
      "magasin_id": 1,
      "prix": 69.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 7,
      "magasin_id": 2,
      "prix": 69.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 7,
      "magasin_id": 3,
      "prix": 69.9,
      "quantite": 9,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 7,
      "magasin_id": 4,
      "prix": 69.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 7,
      "magasin_id": 5,
      "prix": 69.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 7,
      "magasin_id": 6,
      "prix": 69.9,
      "quantite": 2,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 8,
      "magasin_id": 1,
      "prix": 18.9,
      "quantite": 6,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 8,
      "magasin_id": 2,
      "prix": 19.9,
      "quantite": 6,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 8,
      "magasin_id": 3,
      "prix": 19.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 8,
      "magasin_id": 4,
      "prix": 19.9,
      "quantite": 12,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 8,
      "magasin_id": 5,
      "prix": 18.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 8,
      "magasin_id": 6,
      "prix": 19.9,
      "quantite": 22,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 9,
      "magasin_id": 1,
      "prix": 12.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 9,
      "magasin_id": 2,
      "prix": 12.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 9,
      "magasin_id": 3,
      "prix": 12.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 9,
      "magasin_id": 4,
      "prix": 12.9,
      "quantite": 9,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 9,
      "magasin_id": 5,
      "prix": 12.9,
      "quantite": 22,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 9,
      "magasin_id": 6,
      "prix": 12.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 10,
      "magasin_id": 1,
      "prix": 17.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 10,
      "magasin_id": 2,
      "prix": 16.9,
      "quantite": 6,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 10,
      "magasin_id": 3,
      "prix": 17.9,
      "quantite": 15,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 10,
      "magasin_id": 4,
      "prix": 17.9,
      "quantite": 4,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 10,
      "magasin_id": 5,
      "prix": 17.9,
      "quantite": 13,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 10,
      "magasin_id": 6,
      "prix": 17.9,
      "quantite": 19,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 11,
      "magasin_id": 1,
      "prix": 24.9,
      "quantite": 9,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 11,
      "magasin_id": 2,
      "prix": 24.9,
      "quantite": 17,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 11,
      "magasin_id": 3,
      "prix": 24.9,
      "quantite": 11,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 11,
      "magasin_id": 4,
      "prix": 24.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 11,
      "magasin_id": 5,
      "prix": 22.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 11,
      "magasin_id": 6,
      "prix": 24.9,
      "quantite": 5,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 12,
      "magasin_id": 1,
      "prix": 29.9,
      "quantite": 10,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 12,
      "magasin_id": 2,
      "prix": 29.9,
      "quantite": 4,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 12,
      "magasin_id": 3,
      "prix": 29.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 12,
      "magasin_id": 4,
      "prix": 29.9,
      "quantite": 3,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 12,
      "magasin_id": 5,
      "prix": 29.9,
      "quantite": 17,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 12,
      "magasin_id": 6,
      "prix": 29.9,
      "quantite": 16,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 13,
      "magasin_id": 1,
      "prix": 22.9,
      "quantite": 12,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 13,
      "magasin_id": 2,
      "prix": 22.9,
      "quantite": 17,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 13,
      "magasin_id": 3,
      "prix": 22.9,
      "quantite": 3,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 13,
      "magasin_id": 4,
      "prix": 22.9,
      "quantite": 3,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 13,
      "magasin_id": 5,
      "prix": 22.9,
      "quantite": 10,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 13,
      "magasin_id": 6,
      "prix": 22.9,
      "quantite": 18,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 14,
      "magasin_id": 1,
      "prix": 79.9,
      "quantite": 9,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 14,
      "magasin_id": 2,
      "prix": 79.9,
      "quantite": 9,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 14,
      "magasin_id": 3,
      "prix": 79.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 14,
      "magasin_id": 4,
      "prix": 79.9,
      "quantite": 12,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 14,
      "magasin_id": 5,
      "prix": 79.9,
      "quantite": 10,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 14,
      "magasin_id": 6,
      "prix": 79.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 15,
      "magasin_id": 1,
      "prix": 129.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 15,
      "magasin_id": 2,
      "prix": 117.9,
      "quantite": 3,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 15,
      "magasin_id": 3,
      "prix": 129.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 15,
      "magasin_id": 4,
      "prix": 129.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 15,
      "magasin_id": 5,
      "prix": 129.9,
      "quantite": 6,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 15,
      "magasin_id": 6,
      "prix": 129.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 16,
      "magasin_id": 1,
      "prix": 249.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 16,
      "magasin_id": 2,
      "prix": 249.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 16,
      "magasin_id": 3,
      "prix": 225.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 16,
      "magasin_id": 4,
      "prix": 249.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 16,
      "magasin_id": 5,
      "prix": 249.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 16,
      "magasin_id": 6,
      "prix": 249.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 17,
      "magasin_id": 1,
      "prix": 79.9,
      "quantite": 5,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 17,
      "magasin_id": 2,
      "prix": 79.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 17,
      "magasin_id": 3,
      "prix": 79.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 17,
      "magasin_id": 4,
      "prix": 79.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 17,
      "magasin_id": 5,
      "prix": 72.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 17,
      "magasin_id": 6,
      "prix": 79.9,
      "quantite": 4,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 18,
      "magasin_id": 1,
      "prix": 119.9,
      "quantite": 7,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 18,
      "magasin_id": 2,
      "prix": 119.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 18,
      "magasin_id": 3,
      "prix": 119.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 18,
      "magasin_id": 4,
      "prix": 119.9,
      "quantite": 0,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 18,
      "magasin_id": 5,
      "prix": 108.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 18,
      "magasin_id": 6,
      "prix": 119.9,
      "quantite": 2,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 19,
      "magasin_id": 1,
      "prix": 36.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 19,
      "magasin_id": 2,
      "prix": 39.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 19,
      "magasin_id": 3,
      "prix": 39.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 19,
      "magasin_id": 4,
      "prix": 39.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 19,
      "magasin_id": 5,
      "prix": 39.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 19,
      "magasin_id": 6,
      "prix": 39.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 20,
      "magasin_id": 1,
      "prix": 29.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 20,
      "magasin_id": 2,
      "prix": 29.9,
      "quantite": 12,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 20,
      "magasin_id": 3,
      "prix": 29.9,
      "quantite": 3,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 20,
      "magasin_id": 4,
      "prix": 27.9,
      "quantite": 21,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 20,
      "magasin_id": 5,
      "prix": 29.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 20,
      "magasin_id": 6,
      "prix": 29.9,
      "quantite": 20,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 21,
      "magasin_id": 1,
      "prix": 22.9,
      "quantite": 4,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 21,
      "magasin_id": 2,
      "prix": 22.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 21,
      "magasin_id": 3,
      "prix": 22.9,
      "quantite": 8,
      "maj_le": "2026-11-03T18:30:00"
    },
    {
      "article_id": 21,
      "magasin_id": 4,
      "prix": 22.9,
      "quantite": 16,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 21,
      "magasin_id": 5,
      "prix": 22.9,
      "quantite": 11,
      "maj_le": "2026-11-03T18:45:00"
    },
    {
      "article_id": 21,
      "magasin_id": 6,
      "prix": 22.9,
      "quantite": 1,
      "maj_le": "2026-11-03T18:30:00"
    }
  ]
};
