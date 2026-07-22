package org.zamega.zamega.neoforge;

import com.github.yajatkaul.mega_showdown.MegaShowdown;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import org.zamega.zamega.ZamegaMod;
import net.neoforged.fml.common.Mod;

@Mod(ZamegaMod.MOD_ID)
public final class ZamegaNeoForge {
    public ZamegaNeoForge() {
        ZamegaMod.init();

        convert("clefablite", "clefablite");
        convert("crabominite", "crabominite");
        convert("delphoxite", "delphoxite");
        convert("dragoninite", "dragoninite");
        convert("drampanite", "drampanite");
        convert("emboarite", "emboarite");
        convert("excadrite", "excadrite");
        convert("feraligite", "feraligite");
        convert("floettite", "floettite");
        convert("froslassite", "froslassite");
        convert("glimmoranite", "glimmoranite");
        convert("golurkite", "golurkite");
        convert("greninjite", "greninjite");
        convert("hawluchanite", "hawluchanite");
        convert("meganiumite", "meganiumite");
        convert("meowsticite", "meowsticite");
        convert("raichunitex", "raichunite_x");
        convert("raichunitey", "raichunite_y");
        convert("scovillainite", "scovillainite");
        convert("skarmorite", "skarmorite");
        convert("starminite", "starminite");
        convert("victreebelite", "victreebelite");
        convert("staraptite", "staraptite");
        convert("scolipite", "scolipite");
        convert("scraftinite", "scraftinite");
        convert("eelektrossite", "eelektrossite");
        convert("pyroarite", "pyroarite");
        convert("malamarite", "malamarite");
        convert("barbaracite", "barbaracite");
        convert("dragalgite", "dragalgite");
        convert("falinksite", "falinksite");
    }

    private static void convert(String oldId, String newId) {
        BuiltInRegistries.ITEM.addAlias(ResourceLocation.fromNamespaceAndPath(ZamegaMod.MOD_ID, oldId), ResourceLocation.fromNamespaceAndPath(MegaShowdown.MOD_ID, newId));
    }
}
