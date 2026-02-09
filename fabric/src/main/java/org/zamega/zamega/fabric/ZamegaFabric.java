package org.zamega.zamega.fabric;

import org.zamega.zamega.ZamegaMod;
import net.fabricmc.api.ModInitializer;

public final class ZamegaFabric implements ModInitializer {
    @Override
    public void onInitialize() {
        ZamegaMod.init();
    }
}
