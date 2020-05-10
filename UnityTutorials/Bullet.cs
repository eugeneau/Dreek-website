using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{
    public float Range = 2f;
    public float speed = 20f;
    public Rigidbody rb;
    public Camera fpsCam;

    void Start()
    {
        rb.velocity = transform.up * speed;
        Destroy(gameObject, Range);
    }
    void OnCollisionEnter (Collision collision)
    {

    }
}
