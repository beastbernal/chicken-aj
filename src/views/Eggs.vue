<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
        >   
            <v-card-title primary-title>
                <div>
                    Agregue el no. de huevos descartados
                <!-- Agregue el no. de huevos descartados <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span> -->
                </div>
            </v-card-title>
            <v-card-text>
                
            
            <v-form v-model="valid">
                <v-container>
                <v-col>
                    <v-row
                    cols="12"
                    md="4"
                    >
                    <v-alert type="purple" :value="true" outlined>
                        
                    No total de huevos registrados {{totalEgg}}
                    </v-alert>
                    </v-row>
                    <v-row
                    cols="12"
                    md="4"
                    >
                    <label for="numEgg">No. de Huevos</label>
                    <v-text-field
                        solo
                        type="number" label="No. de Huevos" 
                        v-model="numEgg"
                        prepend-inner-icon="mdi-egg"
                    ></v-text-field>
                    </v-row>
                </v-col>
                </v-container>
            </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn block color="success" dark large @click="sumEggs()">Agregar
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

export default {
    data: () => ({
        numEgg: 0,
        totalEgg: 18,
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
        sumEggs () {
            let n = Number.parseInt(this.numEgg)
            let t = Number.parseInt(this.totalEgg)
            this.totalEgg = n + t
            this.numEgg = 0
        }
    },
}
</script>