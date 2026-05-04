import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Wrench, Globe, Code, Shield, Monitor, Tablet, Target, Lightbulb, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, SectionTitle } from "@/components/shared";

const missionsData: Record<string, {
  icon: React.ReactNode;
  title: string;
  context: string;
  objectif: string;
  actions: string[];
  outils: string[];
  resultats: string[];
  competences: string[];
}> = {
  "maintenance-support": {
    icon: <Wrench className="w-8 h-8" />,
    title: "Maintenance & Support Technique",
    context:
      "Au sein du Lycée Saint-Marc, j'assure la maintenance de l'ensemble du parc informatique composé de plusieurs centaines de postes (salles de classe, administration, CDI). Je traite les tickets d'assistance émis par les enseignants, les surveillants et le personnel administratif via un système de ticket sur Share Point.",
    objectif:
      "Garantir la disponibilité et le bon fonctionnement de l'ensemble du parc informatique afin de ne pas impacter le déroulement des cours et le travail administratif.",
    actions: [
      "Diagnostic et résolution de pannes matérielles : remplacement de disques durs, RAM, alimentations, écrans défectueux",
      "Résolution de problèmes logiciels : réinstallation de systèmes d'exploitation, mise à jour de drivers ",
      "Traitement des tickets Share Point avec priorisation selon l'urgence et l'impact sur l'activité",
      "Assistance utilisateurs multi-niveaux : accompagnement des enseignants sur les outils numériques (ENT, vidéoprojecteurs)",
      "Gestion de l'inventaire matériel et suivi des garanties",
      "Préparation et déploiement de nouveaux postes (configuration réseau, intégration au domaine)",
    ],
    outils: ["Share Point", "Windows 10/11", "Active Directory"],
    resultats: [
      "Réduction du temps moyen de résolution des tickets",
      "Amélioration de la satisfaction des utilisateurs",
      "Parc informatique opérationnel avec un taux de disponibilité élevé",
    ],
    competences: ["Diagnostic matériel et logiciel", "Gestion de tickets", "Communication utilisateurs", "Déploiements de postes"],
  },
  "infrastructure-reseau": {
    icon: <Globe className="w-8 h-8" />,
    title: "Infrastructure Réseau d'Entreprise",
    context:
      "L'infrastructure réseau du lycée nécessitait une remise à niveau : baies de brassage désorganisées, switches obsolètes encore en place, câblage non documenté. J'ai été chargé de remettre en ordre certaines baies de l'infrastructure physique et logique du réseau.",
    objectif:
      "Restructurer et optimiser l'infrastructure réseau pour garantir des performances fiables, une meilleure maintenabilité et une sécurité accrue des communications.",
    actions: [
      "Nettoyage  et réorganisation des baies de brassage : retrait des câbles inutilisés, étiquetage systématique",
      "Dépose de switches obsolètes et remplacement par des équipements Ubiquiti performants",
      "Installation de nouvelles prises RJ45 avec plastrons muraux dans les salles nécessitant une connectivité filaire",
      "Configuration de VLANs pour segmenter le réseau (administration, élèves, Wi-Fi ,BTS)",
      "Configuration et déploiement de bornes Wi-Fi Ubiquiti pour couvrir l'établissement",
      "Tests de débit et de connectivité après chaque intervention",
    ],
    outils: ["Switches Ubiquiti , Fs", "Bornes Wifi Ubiquiti (UniFi)", "Testeur de câbles RJ45", "Outils de sertissage"],
    resultats: [
      "Baies de brassage plus propres, et mieux organisées",
      "Réseau segmenté en VLANs sécurisés",
      "Couverture Wi-Fi de l'établissement",
      "Amélioration significative des performances réseau",
    ],
    competences: ["Câblage et brassage", "Configuration réseau (VLAN)", "Ubiquiti UniFi"],
  },
  "antivirus-kaspersky": {
    icon: <Shield className="w-8 h-8" />,
    title: "Gestion Antivirus Kaspersky",
    context:
      "La console d'administration Kaspersky Security Center du lycée était dans un mauvais état : des dizaines de postes utilisateurs obsolètes, des postes signalés comme défectueux sans suivi, et une désynchronisation partielle entre l'agent Kaspersky et le serveur ",
    objectif:
      "Remettre en état la solution antivirus Kaspersky pour garantir une protection efficace de l'ensemble du parc informatique et permettre une administration centralisée fiable.",
    actions: [
      "Audit complet de la console Kaspersky Security Center : identification des comptes obsolètes et des postes fantômes",
      "Suppression méthodique de tous les utilisateurs et postes qui n'existent plus dans l'Active Directory",
      "Correction des agents Kaspersky défectueux sur les postes concernés (réinstallation, mise à jour forcée)",
      "Resynchronisation complète avec l'Active Directory pour refléter la structure réelle du parc",
      "Vérification des politiques de sécurité appliquées : analyse en temps réel, mises à jour automatiques des bases virales",
    ],
    outils: ["Kaspersky Security Center", "Active Directory", "Console d'administration KSC"],
    resultats: [
      "Console Kaspersky nettoyée et synchronisée avec l'AD",
      "100% des postes actifs protégés et à jour",
      "Administration centralisée de la sécurité opérationnelle",
    ],
    competences: ["Administration Kaspersky", "Sécurité des postes de travail", "Synchronisation AD", "Politiques de sécurité"],
  },
  "active-directory": {
    icon: <Monitor className="w-8 h-8" />,
    title: "Administration Active Directory",
    context:
      "Le domaine Active Directory du lycée gère l'ensemble des comptes utilisateurs (enseignants, élèves, administration) ainsi que les stratégies de groupe appliquées au parc informatique. J'administre ce domaine au quotidien pour assurer une gestion centralisée et sécurisée.",
    objectif:
      "Maintenir un annuaire Active Directory propre, structuré et sécurisé, permettant une gestion efficace des droits d'accès et des configurations des postes.",
    actions: [
      "Création, modification et suppression de comptes utilisateurs selon les mouvements de personnel et d'élèves",
      "Organisation des groupes pour refléter la structure de l'établissement",
      "Gestion des groupes de sécurité pour contrôler l'accès aux ressources partagées (dossiers réseau, imprimantes)",
      "Déploiement de GPO : fond d'écran imposé, restrictions aux paramètres , déploiement logiciel automatique",
      "Création de scripts pour automatiser les tâches récurrentes (création en masse de comptes, suppression de compte en masse)",
    ],
    outils: ["Windows Server", "Active Directory ", "Group Policy Management", "PowerShell"],
    resultats: [
      "Annuaire AD structuré et à jour en permanence",
      "GPO déployées et fonctionnelles sur l'ensemble du parc",
      "Automatisation des tâches répétitives via PowerShell",
      "Gestion des droits d'accès conforme aux besoins de chaque service",
    ],
    competences: ["Active Directory", "GPO", "PowerShell", "Gestion des droits", "Windows Server"],
  },
  "developpement-automatisation": {
    icon: <Code className="w-8 h-8" />,
    title: "Scripts d'automatisation PowerShell — Gestion des comptes Active Directory",
    context:
      "Chaque année, l'établissement accueille de nouveaux élèves et de nouveaux enseignants, et doit supprimer les comptes des personnes qui quittent le lycée. Ces opérations, réalisées manuellement, représentaient une charge importante pour le service informatique. J'ai développé des scripts PowerShell pour automatiser l'ensemble de ce cycle de vie des comptes utilisateurs dans l'Active Directory.",
    objectif:
      "Automatiser la création et la suppression des comptes utilisateurs dans l'Active Directory à partir des fichiers exports de Charlemagne, afin de réduire le temps de traitement et les erreurs liées aux manipulations manuelles.",
    actions: [
      "Analyse des fichiers CSV exportés depuis Charlemagne (un fichier élèves, un fichier enseignants)",
      "Développement d'un script PowerShell de création de comptes élèves : lecture du fichier CSV, création des comptes ,attribution des groupes et génération des mots de passe",
      "Développement d'un script PowerShell de suppression des comptes élèves en fin d'année : lecture du fichier CSV ,suppression après vérification",
      "Développement d'un script PowerShell de création de comptes enseignants avec affectation aux groupes et partages réseau spécifiques au profil prof",
      "Tests des scripts en environnement contrôlé avant déploiement réel",
    ],
    outils: ["PowerShell", "Active Directory", "Charlemagne", "Fichiers CSV", "Windows Server"],
    resultats: [
      "Création et suppression de comptes réalisées en quelques minutes au lieu de plusieurs heures",
      "Réduction des erreurs liées aux manipulations manuelles",
      "Processus reproductible et fiable à chaque rentrée et fin d'année",
    ],
    competences: ["Scripting PowerShell", "Administration Active Directory","Gestion du cycle de vie des utilisateurs","Automatisation des tâches d'administration"],
  },
  "gestion-ipads-intune": {
    icon: <Tablet className="w-8 h-8" />,
    title: "Déploiement et gestion d'iPads — Microsoft Intune & Apple Business Manager",
    context:
      "Le lycée Saint-Marc a souhaité mettre à disposition une flotte d'iPads à destination des élèves dans le cadre du développement du numérique éducatif. J'ai été chargé de préparer les appareils, de les intégrer à la solution MDM de l'établissement et de garantir un usage encadré sans compte Apple personnel des élèves sur les appareils de l'établissement.",
    objectif:
      "Déployer un parc d'iPads de façon centralisée via Microsoft Intune et Apple Business Manager, en assurant un usage sécurisé et adapté au contexte scolaire.",
    actions: [
      "Préparation physique des iPads : déballage, vérification du matériel et mise à jour iOS",
      "Inscription des appareils dans Apple Business Manager afin de les lier à l'organisation et permettre un déploiement automatique via Intune",
      "Configuration de la restriction de connexion avec un identifiant Apple personnel, afin d'éviter que les élèves utilisent leurs comptes personnels sur les appareils de l'établissement",
      "Limitation des droits élèves : blocage de l'App Store, restriction de Safari, interdiction de modification des paramètres",
      "Déploiement des applications pédagogiques sur l'ensemble du parc via le portail Intune, sans intervention manuelle sur chaque appareil",
      "Suivi et administration du parc à distance via le portail Intune",
    ],
    outils: ["Microsoft Intune ", "Apple Business Manager", "MacBook" ],
    resultats: [
      "Parc d'iPads déployé et administré de façon centralisée",
      "Appareils utilisables directement par les élèves sans configuration manuelle",
      "Aucun compte Apple personnel autorisé sur les appareils de l'établissement",
      "Applications pédagogiques disponibles automatiquement sur tous les iPads",
    ],
    competences: ["MDM / Intune", "Apple Business Manager", "Gestion de parc mobile", "Sécurité des appareils", "Déploiement d'applications"],
  },
};

const slugs = Object.keys(missionsData);

const MissionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const mission = slug ? missionsData[slug] : null;

  if (!mission) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold">Mission introuvable</h2>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/missions">Retour aux missions</Link>
        </Button>
      </section>
    );
  }

  const currentIndex = slug ? slugs.indexOf(slug) : -1;
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/missions" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux missions
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {mission.icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{mission.title}</h1>
        </motion.div>

        <div className="space-y-10">
          {/* Contexte */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Contexte</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{mission.context}</p>
            </div>
          </motion.div>

          {/* Objectif */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Objectif</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground leading-relaxed">{mission.objectif}</p>
            </div>
          </motion.div>

          {/* Actions réalisées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Actions réalisées</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-3">
                {mission.actions.map((action) => (
                  <li key={action} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Outils utilisés */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Outils & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.outils.map((outil) => (
                <span
                  key={outil}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground"
                >
                  {outil}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Résultats obtenus</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {mission.resultats.map((res) => (
                <div key={res} className="rounded-xl border border-border bg-card p-4 card-hover flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{res}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compétences mobilisées */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Compétences mobilisées</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {mission.competences.map((comp) => (
                <span
                  key={comp}
                  className="text-sm px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary"
                >
                  {comp}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation entre missions */}
        <motion.div
          className="mt-16 flex justify-between items-center border-t border-border pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {prevSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/missions/${prevSlug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Mission précédente
              </Link>
            </Button>
          ) : <div />}
          {nextSlug ? (
            <Button asChild variant="outline" size="sm">
              <Link to={`/missions/${nextSlug}`} className="flex items-center gap-2">
                Mission suivante
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          ) : <div />}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionDetail;
