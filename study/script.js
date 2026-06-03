// Target DOM elements
const simpleButton = document.getElementById("simple");
const complexButton = document.getElementById("complex");
let passwordInput = document.getElementById("password-input");

const simplePasswords = [
  "richPanther49",
  "BlueTiger72",
  "SilentFalcon31",
  "GoldenRiver88",
  "LuckyForest64",
  "RapidLion27",
  "UrbanWolf53",
  "CrimsonHawk19",
  "BrightCanyon41",
  "SilverOtter76",
  "CalmEagle58",
  "HiddenValley92",
  "SwiftLeopard34",
  "BraveFalcon67",
  "AmberTiger25",
  "FrostWolf81",
  "CleverRaven46",
  "IronPanda39",
  "WildCobra74",
  "RapidShark63",
  "QuietBadger55",
  "BoldPanther90",
  "SunnyOtter12",
  "DeepFalcon83",
  "CrystalWolf61",
  "AmberWolf34",
  "AzureTiger76",
  "BronzeFalcon21",
  "CopperLion59",
  "DaringFox88",
  "DesertHawk43",
  "EmeraldBear67",
  "FallenEagle12",
  "FiercePanther90",
  "FrozenTiger35",
  "GhostWolf74",
  "GlacialFox28",
  "HiddenLion61",
  "IcyFalcon49",
  "JadeTiger83",
  "KeenWolf57",
  "LightningFox20",
  "MajesticBear31",
  "MidnightTiger46",
  "NobleEagle65",
  "ObsidianWolf79",
  "OceanLion24",
  "PhantomTiger58",
  "PolarBear72",
  "QuietFalcon13",
  "RapidWolf86",
  "RedFox40",
  "RoyalTiger93",
  "SableLion17",
  "SavageWolf52",
  "ScarletFalcon68",
  "ShiningEagle26",
  "SmokyTiger81",
  "StealthFox37",
  "SteelBear94",
  "SwiftLion63",
  "TempestWolf15",
  "TwilightFalcon70",
  "ValiantTiger48",
  "VelvetFox22",
  "ViciousWolf89",
  "WildEagle33",
  "WinterLion56",
  "WiseTiger91",
  "ZephyrFalcon27",
  "BraveWolf60",
  "DarkTiger38",
  "FireLion75",
  "StormEagle44",
  "BrightFox69",
];

const complexPasswords = [
  "R!chPanth3r#49",
  "Blu3T!ger$72",
  "S!lentF@lcon31",
  "G0ldenR!ver*88",
  "L#ckyF0rest64",
  "R@pidL!on27",
  "Urb@nW0lf%53",
  "Cr!ms0nH@wk19",
  "Br!ghtC@nyon41",
  "S!lver0tter^76",
  "X7$kL!2q#P9z",
  "mQ4@Tz!8&Lp2",
  "R!8d$Kp3@Xv6",
  "Zq7!N$4@Lm2#",
  "T@2!pR8$wX6#",
  "Velvet-Cactus-Planet-482",
  "Solar-Mango-Bridge-719",
  "Copper-Forest-Storm-644",
  "Ocean-Lemon-Thunder-205",
  "Ivory-Shadow-Field-918",
  "Neon-Canyon-Rocket-773",
  "Crimson-Pixel-Valley-662",
  "Golden-Saturn-River-194",
  "Indigo-Bamboo-Sky-527",
  "Frosty-Comet-Drift-803",
  "Amber-Quantum-Leaf-611",
  "Silver-Anchor-Breeze-442",
  "Rapid-Meteor-Garden-308",
  "Silent-Coffee-Harbor-905",
  "Urban-Lotus-Signal-276",
  "Bright-Pebble-Tunnel-731",
  "Cosmic-Cedar-Cloud-510",
  "Electric-Harbor-Dune-862",
  "Hidden-Orchid-Wave-497",
  "Crystal-Falcon-Peak-660",
  "Lucky-Tiger-Island-329",
  "Brave-Panda-Galaxy-718",
  "Swift-Willow-Engine-455",
  "Iron-Coral-Planet-624",
  "Wild-Raven-Shadow-809",
];

// Event listeners for buttons
simpleButton.addEventListener("click", () => {
  function generateSimplePassword() {
    const randomIndex = Math.floor(Math.random() * simplePasswords.length);
    const generatedPassword = simplePasswords[randomIndex];
    let initalInputValue = passwordInput;

    initalInputValue.value = generatedPassword;

    let copyText = passwordInput;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    return generatedPassword;
  }
  generateSimplePassword();
});

complexButton.addEventListener("click", () => {
  function generateComplexPassword() {
    const randomIndex = Math.floor(Math.random() * complexPasswords.length);
    const generatedPassword = complexPasswords[randomIndex];

    let initalInputValue = passwordInput;

    initalInputValue.value = generatedPassword;

    let copyText = passwordInput;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    return generatedPassword;
  }
  generateComplexPassword();
});
