class Module {
    constructor(title, id, icon, description, html) {
      this.title = title;
      this.id = id,
      this.icon = icon;
      this.description = description;
      this.html = html;
    }
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
    "OptiLoop": new Module(
        "Opti Loop",
        "OptiLoop",
        "/ModuleLab/img/icons/script-icon.svg",
        "Make use of many loops without a performance hit. (depending on code within the loop)",
        [
            "<p>Sometime ago i noticed that calling multiple for/while loops can have a massive impact on performane in game." + 
            "But sometimes you really need those loops." +
            "My Solution: Opti Loop." +
            "Opti Loop uses Runservice and its stepped event to do the same as loops only with way less performance issues." +
            "On a test run i could run 100 loops and still have no issues with performance." +
            "This ofcourse can be different for you depending on what code you're running in those loops." +
            "</p>"
        ]
    ),
    };

export default defaultExport;