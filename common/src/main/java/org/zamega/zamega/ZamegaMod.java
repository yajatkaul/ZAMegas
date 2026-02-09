package org.zamega.zamega;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.zamega.zamega.item.ZamegaItems;

public final class ZamegaMod {
    public static final String MOD_ID = "zamega";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    public static void init() {
        LOGGER.info("Zamega Mod 正在初始化!");
        ZamegaItemGroups.register();
    }

    public static void initAfterMSD() {
        ZamegaItems.register();
    }
}
