package com.myfabricapp.screens

import android.os.Bundle
import android.view.View
import android.widget.ProgressBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.myfabricapp.adapters.GifAdapter
import com.myfabricapp.models.Gif
import com.myfabricapp.network.ApiService
import com.myfabricapp.network.RetrofitInstance
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class CategoryScreen : AppCompatActivity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var gifAdapter: GifAdapter
    private var gifList: MutableList<Gif> = mutableListOf()
    private lateinit var progressBar: ProgressBar
    private val apiService: ApiService by lazy { RetrofitInstance.getRetrofitInstance().create(ApiService::class.java) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_category_screen)

        recyclerView = findViewById(R.id.recyclerView)
        progressBar = findViewById(R.id.progressBar)
        recyclerView.layoutManager = LinearLayoutManager(this)
        gifAdapter = GifAdapter(gifList)
        recyclerView.adapter = gifAdapter

        fetchGifs()
    }

    private fun fetchGifs() {
        progressBar.visibility = View.VISIBLE
        apiService.getHotGifs().enqueue(object : Callback<List<Gif>> {
            override fun onResponse(call: Call<List<Gif>>, response: Response<List<Gif>>) {
                progressBar.visibility = View.GONE
                if (response.isSuccessful) {
                    response.body()?.let {
                        gifList.clear()
                        gifList.addAll(it)
                        gifAdapter.notifyDataSetChanged()
                    }
                } else {
                    showError("Error: ${response.message()}. Please try again.")
                }
            }

            override fun onFailure(call: Call<List<Gif>>, t: Throwable) {
                progressBar.visibility = View.GONE
                showError("Failure: ${t.message}. Please check your internet connection and try again.")
            }
        })
    }

    private fun showError(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_LONG).show()
    }
}