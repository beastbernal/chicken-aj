<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
        >   
            <v-card-title primary-title>
                <div>
                    <!-- Agregue el no. de gallinas descartadas -->
                <!-- Agregue el no. de huevos descartados <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span> -->
                </div>
            </v-card-title>
            <v-card-text>    
                <v-card
                    class="mx-auto text-center"
                    color="green"
                    dark
                    max-width="600"
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                    <div class="display-1 font-weight-thin">Ventas de las Últimas 24 horas</div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center">
                    <v-btn block text>Imprimir Reporte</v-btn>
                    </v-card-actions>
                </v-card>     
            </v-card-text>
            <v-card-actions>
                <!-- <v-btn block color="success" dark large @click="deleteChicken()">Restar
                    <v-icon>mdi-skull</v-icon>
                </v-btn> -->
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

export default {
    data: () => ({
        value: [
            423,
            446,
            675,
            510,
            590,
            610,
            760,
        ],
        numChicken: 0,
        totalChicken: 18462,
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        deleteChicken () {
            let n = Number.parseInt(this.numChicken)
            let t = Number.parseInt(this.totalChicken)
            this.totalChicken = t - n
            this.numChicken = 0
        }
    },
}
</script>