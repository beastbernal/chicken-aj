<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
        >   
            <v-card-title primary-title>
                <div>
                    Agregue el no. de gallinas descartadas
                <!-- Agregue el no. de huevos descartados <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span> -->
                </div>
            </v-card-title>
            <v-card-text>
                
            
            <v-form v-model="valid">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-alert type="purple" :value="true" outlined>
                        
                    No total de gallinas registrados {{totalChicken}}
                    </v-alert>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <label for="numEgg">No. de Huevos</label>
                    <v-text-field
                        solo
                        type="number" label="No. de Huevos" 
                        v-model="numChicken"
                        prepend-inner-icon="mdi-egg"
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn block color="success" dark large @click="deleteChicken()">Restar
                    <v-icon>mdi-skull</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

export default {
    data: () => ({
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