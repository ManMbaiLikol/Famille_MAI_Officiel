var arbreFamilleMai = {
  chart: {
    container: "#tree-simple",
    rootOrientation: "NORTH",
    nodeAlign: "BOTTOM",
    connectors: {
      type: "step",
      style: {
        stroke: "#004d40",
        "stroke-width": 2
      }
    },
    node: {
      HTMLclass: "nodeExample1"
    },
    animation: {
      nodeAnimation: "easeOutBounce",
      nodeSpeed: 700,
      connectorsAnimation: "bounce",
      connectorsSpeed: 700
    }
  },

  nodeStructure: {
    text: { name: "LÔGA", title: "Ancêtre fondateur" },
    children: [
      {
        text: { name: "BENA LÔGA", title: "Fils de LÔGA" },
        children: [
          {
            text: { name: "MAÏ BATJOM BA BENA", title: "NSOMBOL SONG" },
            children: [
              // Branche MAÏ MAÏ
              {
                text: { name: "MAÏ MAÏ", title: "Fils aîné" },
                children: [
                  { text: { name: "YOHANA NGO MAÏ", title: "→ Famille NGAMBI" } }
                ]
              },

              // Branche BIKOÏ BI MAÏ
              {
                text: { name: "BIKOÏ BI MAÏ", title: "Branche principale" },
                children: [
                  // Descendance de MAÏ (†) - 1ère épouse
                  {
                    text: { name: "MAÏ (†)", title: "1ère épouse: NGO DJEL BAMHEG" }
                  },

                  // Descendance de MAÏ BIKOÏ SALOMON
                  {
                    text: { name: "MAÏ BIKOÏ SALOMON", title: "1ère épouse: NGO DJEL BAMHEG" },
                    children: [
                      // 1ère épouse de Salomon
                      {
                        text: { name: "Descendance 1", title: "1ère épouse: NGO BANBA VÉRONIQUE" },
                        children: [
                          { text: { name: "BIKOÏ BI MAÏ Samuel" } },
                          { text: { name: "NGO MAÏ Julienne" } }
                        ]
                      },
                      // 2e épouse de Salomon
                      {
                        text: { name: "Descendance 2", title: "2e épouse: NGO BASSAGAL MARIE" },
                        children: [
                          { text: { name: "BASSAGAL (†)" } },
                          { text: { name: "NGO MAÏ (NGONDA)" } },
                          { text: { name: "MBOM ROBERT" } },
                          { text: { name: "NWASGA (†)" } },
                          { text: { name: "BIKOÏ BOUBA" } },
                          { text: { name: "BATJOM ROGER" } },
                          { text: { name: "NGO MAÏ JEANNE" } },
                          { text: { name: "NGO MAÏ MAGUY" } },
                          { text: { name: "DJEL FILS" } }
                        ]
                      }
                    ]
                  },

                  // NGO BIKOÏ BI MAÏ JEANNE
                  {
                    text: { name: "NGO BIKOÏ BI MAÏ JEANNE", title: "1ère épouse → Famille NDEBI" }
                  },

                  // DJEL (†)
                  {
                    text: { name: "DJEL (†)", title: "1ère épouse: NGO DJEL BAMHEG" }
                  },

                  // 2e épouse de BIKOÏ BI MAÏ - NGO BAYIHA PAULINE
                  // Descendance de BIKOÏ BIKOÏ
                  {
                    text: { name: "BIKOÏ BIKOÏ", title: "2e épouse: NGO BAYIHA PAULINE" },
                    children: [
                      {
                        text: { name: "Descendance BIKOÏ BIKOÏ", title: "épouse: SALOMÉ ANDING (MAKA)" },
                        children: [
                          { text: { name: "BIKOÏ EMMANUEL" } },
                          { text: { name: "NGO BIKOÏ BÉATRICE" } }
                        ]
                      }
                    ]
                  },

                  // Descendance de YAP BIKOÏ
                  {
                    text: { name: "YAP BIKOÏ", title: "2e épouse: NGO BAYIHA PAULINE" },
                    children: [
                      // 1ère épouse de YAP BIKOÏ
                      {
                        text: { name: "Descendance 1", title: "1ère épouse: NGO MILONGUÈ BERTHE" },
                        children: [
                          { text: { name: "BIKOÏ SAMUEL DIEUDONNÉ" } },
                          { text: { name: "NGO YAP BIKOÏ GRÂCE (†)" } }
                        ]
                      },
                      // 2e épouse de YAP BIKOÏ
                      {
                        text: { name: "Descendance 2", title: "2e épouse: NGO MBOCK BATOUM M.C." },
                        children: [
                          {
                            text: { name: "Enfants avant mariage", title: "MBOCK(†), NGÈNÈ, MBAG" },
                            children: [
                              { text: { name: "MBOCK (†)" } },
                              { text: { name: "NGÈNÈ Charles" } },
                              { text: { name: "MBAG ELEXANDRE" } }
                            ]
                          },
                          {
                            text: { name: "Enfants en mariage", title: "" },
                            children: [
                              { text: { name: "NGO YAP BIKOÏ FRANÇOISE (†)" } },
                              { text: { name: "NGO YAP BIKOÏ GERMAINE" } },
                              { text: { name: "BIKOÏ BI YAP BENJAMIN" } }
                            ]
                          }
                        ]
                      }
                    ]
                  },

                  // NGO BIKOÏ BI MAÏ Thérèse
                  {
                    text: { name: "NGO BIKOÏ BI MAÏ Thérèse", title: "2e épouse: NGO BAYIHA PAULINE" }
                  }
                ]
              },

              // Branche BATJOM MAÏ
              {
                text: { name: "BATJOM MAÏ", title: "Fils de MAÏ BATJOM BA BENA" },
                children: [
                  // 1ère épouse
                  {
                    text: { name: "Descendance 1", title: "épouse: NGO NYOBE" },
                    children: [
                      { text: { name: "NGO BATJOM PAULINE", title: "veuve HONLA" } },
                      { text: { name: "NGO BATJOM ESTHER", title: "veuve MINTOU" } },
                      { text: { name: "MAÏ BATJOM GILBERT (†)", title: "Gabon" } },
                      { text: { name: "BATJOM PAUL (NYOBE)" } },
                      { text: { name: "BATJOM EMMANUEL", title: "l'ingénieur" } },
                      { text: { name: "MARTA NGO BATJOM" } }
                    ]
                  },
                  // 2e épouse
                  {
                    text: { name: "Descendance 2", title: "épouse: NGO NKÔDOG GEORGETTE" },
                    children: [
                      { text: { name: "BATJOM PAUL" } },
                      { text: { name: "NGO BATJOM MONIQUE" } },
                      { text: { name: "BATJOM ANDRÉ" } }
                    ]
                  },
                  // Épouse héritée
                  {
                    text: { name: "Descendance héritée", title: "épouse héritée: NGO NKANG (veuve NWASGA MAÏ)" },
                    children: [
                      { text: { name: "NGO NWASGA MAÏ TECLA" } },
                      { text: { name: "NGO NWASGA CHAVIE" } },
                      { text: { name: "NGO NWASGA (x2)" } },
                      { text: { name: "NWASGA NOAH" } },
                      { text: { name: "NWASGA MBOGMIS" } }
                    ]
                  }
                ]
              },

              // MBOM MAÏ et NWASGA MAÏ
              { text: { name: "MBOM MAÏ", title: "Fils de MAÏ BATJOM BA BENA" } },
              { text: { name: "NWASGA MAÏ", title: "Fils de MAÏ BATJOM BA BENA" } }
            ]
          }
        ]
      },

      // Autres branches de LÔGA
      { text: { name: "DJAP LÔGA", title: "Fils de LÔGA" } },
      { text: { name: "MATOUMB LÔGA", title: "Fils de LÔGA" } },
      { text: { name: "MASSOCK LÔGA", title: "Fils de LÔGA" } }
    ]
  }
};

new Treant(arbreFamilleMai);
