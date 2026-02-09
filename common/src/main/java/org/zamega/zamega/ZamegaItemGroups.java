package org.zamega.zamega;

import dev.architectury.registry.CreativeTabRegistry;
import dev.architectury.registry.registries.DeferredRegister;
import dev.architectury.registry.registries.RegistrySupplier;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import org.zamega.zamega.item.ZamegaItems;

public final class ZamegaItemGroups {
    public static final DeferredRegister<CreativeModeTab> CREATIVE_TABS = DeferredRegister.create(ZamegaMod.MOD_ID, Registries.CREATIVE_MODE_TAB);
    public static void register() {
        CREATIVE_TABS.register();
    }
    public static final RegistrySupplier<CreativeModeTab> ZAMEGA_TAB = CREATIVE_TABS.register(
            "zamega_tab",
            () -> CreativeTabRegistry.create(
                    Component.translatable("creativeTab.zamegas.tab"),
                    () -> new ItemStack(ZamegaItems.ZYGARDITE) // Icon
            )
    );
}

