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
            `
            <section id="Install Plugin" class="bookmark">
        <p class="title">Install Plugin</p>
        <ul id="Installation" class="sub-bookmark">
            <li>
                <p class="sub-title">Installation</p>
            </li>
            <ul>
                <li>
                    <p>
                        Go to 
                        <a class="link" href="https://www.roblox.com/library/11453345861/ParticlePlugin" target="_blank">https://www.roblox.com/library/11453345861/ParticlePlugin</a>
                        And click on the install button to install the plugin.
                    </p>
                </li>
            </ul>
        </ul>
    </section>
    <section id="Script Injections" class="bookmark">
        <p class="title">Script Injections</p>
        <ul id="After install, re-enter or update" class="sub-bookmark">
            <li>
                <p class="sub-title">After install, re-enter or update</p>
            </li>
            <ul>
                <li>
                    <p>When the plugin is firstly installed, studio is opened or the plugin updates. 
                        The plugin will insert 3 scripts into your place.
                        2 of wich are to activate the particle system on parts that share the collection tag <span class="string">"ParticleSystem"</span>.
                        The other one is the Meshparticle module itself.
                        It can be found in <span class="path">"game.ReplicatedStorage > ModulePack > Meshparticles"</span>
                    </p>
                </li>
            </ul>
        </ul>
    </section>
    <section id="Plugin Usage" class="bookmark">
        <p class="title">Plugin Usage</p>
        <ul id="Open" class="sub-bookmark">
            <li>
                <p class="sub-title">Open</p>
            </li>
            <ul>
                <li>
                    <p>You can open the plugin by going to <span class="path">"Plugins > Particle System Plugin"</span>. 
                        Clicking on the icon will open the plugin.</p>
                </li>
            </ul>
        </ul>
        <ul id="Functions" class="sub-bookmark">
            <li>
                <p class="sub-title">Functions</p>
            </li>
            <ul>
                <li>
                    <p class="sub-title">Add</p>
                </li>
                <li>
                    <p>You can easily add the particle system tag and attributes to a 
                        <span class="class">"Part"</span>
                        or
                        <span class="class">"Attachment"</span>
                        by selecting it in the viewport and clicking the Add button.
                    </p>
                </li>
            </ul>
        </ul>
    </section>
            `
        ]
    ),
    "OptiLoop": new Module(
        "Opti Loop",
        "OptiLoop",
        "/ModuleLab/img/icons/script-icon.svg",
        "Make use of many loops without a performance hit. (depending on code within the loop)",
        [
            
        ]
    ),
    };

export default defaultExport;