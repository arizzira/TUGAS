package com.example.kumpulandoa

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    // 1. Sebelum Tidur
    fun openDoaTidur(view: View) {
        startActivity(Intent(this, DoaTidurActivity::class.java))
    }

    // 2. Bangun Tidur
    fun openDoaBangun(view: View) {
        startActivity(Intent(this, DoaBangunActivity::class.java))
    }

    // 3. Sebelum Makan
    fun opendoamakan(view: View) {
        startActivity(Intent(this, doamakanActivity::class.java))
    }

    // 4. Sesudah Makan
    fun openSesudahmakan(view: View) {
        startActivity(Intent(this, SesudahmakanActivity::class.java))
    }

    // 5. Keluar Rumah
    fun openKeluarrumah(view: View) {
        startActivity(Intent(this, KeluarrumahActivity::class.java))
    }

    // 6. Masuk Rumah
    fun openMasukrumah(view: View) {
        startActivity(Intent(this, MasukrumahActivity::class.java))
    }

    // 7. Masuk Kamar Mandi
    fun openMasukkamarmandi(view: View) {
        startActivity(Intent(this, MasukkamarmandiActivity::class.java))
    }

    // 8. Keluar Kamar Mandi
    fun openKeluarkamarmandi(view: View) {
        startActivity(Intent(this, KeluarkamarmandiActivity::class.java))
    }
}