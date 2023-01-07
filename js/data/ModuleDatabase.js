class Module {
    constructor(title, id, icon, description, html) {
      this.title = title;
      this.id = id,
      this.icon = icon;
      this.description = description;
      this.html = html;
    }
}

const DocTypes = {
    Explainer: "Explainer",
    Video: "Video",
    Codeblock: "Codeblock"
}

const defaultExport = {
    "MeshParticles": new Module(
        "3D Particle System",
        "MeshParticles",
        "/ModuleLab/img/icons/script-icon.svg",
        "This Module allows you to spawn meshes and models from a particle system.",
        [

        ]
    ),
    };

export default defaultExport;