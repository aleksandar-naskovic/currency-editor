<template>
    <v-card
        height="400"
        width="256"
        class="overflow-hidden"
    >
        <v-navigation-drawer permanent>

            <v-list
                dense
                nav
            >
                <v-list-item-group v-model="selected"  color="primary">
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    active-class
                >
                    <v-list-item-icon>
                        <img :src=imgPath(item.icon) class="mb-2">
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "SideBar",
    data () {
        return {
            items: [
                { title: 'Analytics', icon: 'analytics' },
                { title: 'Offers', icon: 'discounts' },
                { title: 'Loyality', icon: 'loyality' },
                { title: 'Currencies', icon: 'currencies' },
                { title: 'Dispatch', icon: 'dispatch' },
                { title: 'Configurations', icon: 'settings' },
            ],
            selected: 3,
            right: true,
        }
    },
    methods: {
        imgPath(img) {
            return require(`@/assets/${img}.png`);
        }
    }
}
</script>

<style scoped>

</style>
