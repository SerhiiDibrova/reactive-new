package com.myfabricapp.screens

import android.os.Bundle
import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.myfabricapp.R
import com.myfabricapp.adapters.GifAdapter
import com.myfabricapp.models.Gif
import com.myfabricapp.network.ApiService
import com.myfabricapp.network.RetrofitInstance
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import retrofit2.HttpException
import retrofit2.await

class FreshScreen : AppCompatActivity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var gifAdapter: GifAdapter
    private var gifList: List<Gif> = emptyList()
    private var isLoading: Boolean = false
    private var errorMessage: String? = null
    private lateinit var loadingIndicator: View
    private lateinit var errorTextView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fresh_screen)

        recyclerView = findViewById(R.id.recyclerView)
        loadingIndicator = findViewById(R.id.loadingIndicator)
        errorTextView = findViewById(R.id.errorTextView)
        gifAdapter = GifAdapter(gifList)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = gifAdapter

        fetchFreshGifs()
    }

    private fun fetchFreshGifs() {
        isLoading = true
        updateUI()
        lifecycleScope.launch {
            try {
                val apiService = RetrofitInstance.getRetrofitInstance().create(ApiService::class.java)
                gifList = apiService.getFreshGifs().await().data
                gifAdapter.updateGifs(gifList)
            } catch (e: HttpException) {
                errorMessage = "Error fetching GIFs: ${e.message()}"
            } catch (e: Exception) {
                errorMessage = "An unexpected error occurred."
            } finally {
                isLoading = false
                updateUI()
            }
        }
    }

    private fun updateUI() {
        when {
            isLoading -> {
                loadingIndicator.visibility = View.VISIBLE
                errorTextView.visibility = View.GONE
                recyclerView.visibility = View.GONE
            }
            errorMessage != null -> {
                loadingIndicator.visibility = View.GONE
                errorTextView.text = errorMessage
                errorTextView.visibility = View.VISIBLE
                recyclerView.visibility = View.GONE
            }
            gifList.isEmpty() -> {
                loadingIndicator.visibility = View.GONE
                errorTextView.text = "No GIFs available."
                errorTextView.visibility = View.VISIBLE
                recyclerView.visibility = View.GONE
            }
            else -> {
                loadingIndicator.visibility = View.GONE
                errorTextView.visibility = View.GONE
                recyclerView.visibility = View.VISIBLE
            }
        }
    }
}