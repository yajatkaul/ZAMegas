package org.zamega.zamega.item;

import com.github.yajatkaul.mega_showdown.MegaShowdown;
import com.github.yajatkaul.mega_showdown.components.MegaShowdownDataComponents;
import com.github.yajatkaul.mega_showdown.item.custom.ToolTipItem;
import com.github.yajatkaul.mega_showdown.item.custom.mega.MegaStone;
import com.github.yajatkaul.mega_showdown.utils.RegistryLocator;
import dev.architectury.registry.registries.DeferredRegister;
import dev.architectury.registry.registries.RegistrySupplier;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import org.zamega.zamega.ZamegaItemGroups;
import org.zamega.zamega.ZamegaMod;

public class ZamegaItems {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ZamegaMod.MOD_ID, Registries.ITEM);

    public static RegistrySupplier<Item> ABSOLITEZ = registerMegaStone("absolitez");
    public static RegistrySupplier<Item> BARBARACITE = registerMegaStone("barbaracite");
    public static RegistrySupplier<Item> BAXCALIBRITE = registerMegaStone("baxcalibrite");
    public static RegistrySupplier<Item> CHANDELURITE = registerMegaStone("chandelurite");
    public static RegistrySupplier<Item> CHESNAUGHTITE = registerMegaStone("chesnaughtite");
    public static RegistrySupplier<Item> CHIMECHOITE = registerMegaStone("chimechoite");
    public static RegistrySupplier<Item> CLEFABLITE = registerMegaStone("clefablite");
    public static RegistrySupplier<Item> CRABOMINITE = registerMegaStone("crabominite");
    public static RegistrySupplier<Item> DARKRANITE = registerMegaStone("darkranite");
    public static RegistrySupplier<Item> DELPHOXITE = registerMegaStone("delphoxite");
    public static RegistrySupplier<Item> DRAGALGITE = registerMegaStone("dragalgite");
    public static RegistrySupplier<Item> DRAGONINITE = registerMegaStone("dragoninite");
    public static RegistrySupplier<Item> DRAMPANITE = registerMegaStone("drampanite");
    public static RegistrySupplier<Item> EELEKTROSSITE = registerMegaStone("eelektrossite");
    public static RegistrySupplier<Item> EMBOARITE = registerMegaStone("emboarite");
    public static RegistrySupplier<Item> EXCADRITE = registerMegaStone("excadrite");
    public static RegistrySupplier<Item> FALINKSITE = registerMegaStone("falinksite");
    public static RegistrySupplier<Item> FERALIGITE = registerMegaStone("feraligite");
    public static RegistrySupplier<Item> FLOETTITE = registerMegaStone("floettite");
    public static RegistrySupplier<Item> FROSLASSITE = registerMegaStone("froslassite");
    public static RegistrySupplier<Item> GARCHOMPITEZ = registerMegaStone("garchompitez");
    public static RegistrySupplier<Item> GLIMMORANITE = registerMegaStone("glimmoranite");
    public static RegistrySupplier<Item> GOLISOPITE = registerMegaStone("golisopite");
    public static RegistrySupplier<Item> GOLURKITE = registerMegaStone("golurkite");
    public static RegistrySupplier<Item> GRENINJITE = registerMegaStone("greninjite");
    public static RegistrySupplier<Item> HAWLUCHANITE = registerMegaStone("hawluchanite");
    public static RegistrySupplier<Item> HEATRANITE = registerMegaStone("heatranite");
    public static RegistrySupplier<Item> LUCARIONITEZ = registerMegaStone("lucarionitez");
    public static RegistrySupplier<Item> MAGEARNITE = registerMegaStone("magearnite");
    public static RegistrySupplier<Item> MALAMARITE = registerMegaStone("malamarite");
    public static RegistrySupplier<Item> MEGANIUMITE = registerMegaStone("meganiumite");
    public static RegistrySupplier<Item> MEOWSTICITE = registerMegaStone("meowsticite");
    public static RegistrySupplier<Item> PYROARITE = registerMegaStone("pyroarite");
    public static RegistrySupplier<Item> RAICHUNITEX = registerMegaStone("raichunitex");
    public static RegistrySupplier<Item> RAICHUNITEY = registerMegaStone("raichunitey");
    public static RegistrySupplier<Item> SCOLIPITE = registerMegaStone("scolipite");
    public static RegistrySupplier<Item> SCOVILLAINITE = registerMegaStone("scovillainite");
    public static RegistrySupplier<Item> SCRAFTINITE = registerMegaStone("scraftinite");
    public static RegistrySupplier<Item> SKARMORITE = registerMegaStone("skarmorite");
    public static RegistrySupplier<Item> STARAPTITE = registerMegaStone("staraptite");
    public static RegistrySupplier<Item> STARMINITE = registerMegaStone("starminite");
    public static RegistrySupplier<Item> TATSUGIRINITE = registerMegaStone("tatsugirinite");
    public static RegistrySupplier<Item> VICTREEBELITE = registerMegaStone("victreebelite");
    public static RegistrySupplier<Item> ZERAORITE = registerMegaStone("zeraorite");
    public static RegistrySupplier<Item> ZYGARDITE = registerMegaStone("zygardite");
    public static final RegistrySupplier<Item> ANGE = registerHelditems("ange");

    private static RegistrySupplier<Item> registerMegaStone(String name) {
        return ITEMS.register(name, () -> new MegaStone(
                        new Item.Properties()
                                .component(MegaShowdownDataComponents.REGISTRY_TYPE_COMPONENT.get(), RegistryLocator.MEGA)
                                .component(MegaShowdownDataComponents.RESOURCE_LOCATION_COMPONENT.get(), ResourceLocation.fromNamespaceAndPath(ZamegaMod.MOD_ID, name))
                                .arch$tab(ZamegaItemGroups.ZAMEGA_TAB)
                )
        );
    }
    private static RegistrySupplier<Item> registerHelditems(String name) {
        return ITEMS.register(name, () -> new ToolTipItem(
                        new Item.Properties()
                                .component(MegaShowdownDataComponents.REGISTRY_TYPE_COMPONENT.get(), RegistryLocator.HELD_FORM_CHANGE)
                                .component(MegaShowdownDataComponents.RESOURCE_LOCATION_COMPONENT.get(), ResourceLocation.fromNamespaceAndPath(ZamegaMod.MOD_ID, name))
                                .arch$tab(ZamegaItemGroups.ZAMEGA_TAB)

                )
        );
    }
    public static void register() {
        ITEMS.register();
    }
}