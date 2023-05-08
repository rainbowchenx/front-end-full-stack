<template>
    <div class="rating">
      <span v-for="star in stars" :class="{ 'rated': star <= value }">
        <i class="star"></i>
      </span>
      <span class="text">{{ text }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "Rating",
    data(){
        return {
            value:2
        }
    },
    // props: {
    //   value: {
    //     type: Number,
    //     required: true,
    //     validator: (value) => value >= 1 && value <= 5,
    //   },
    // },
    computed: {
      stars() {
        return [1, 2, 3, 4, 5];
      },
      text() {
        if (this.value <= 2) {
          return "不满意";
        } else if (this.value <= 4) {
          return "一般";
        } else {
          return "满意";
        }
      },
    },
  };
  </script>
  
  <style>
  .rating {
    display: inline-flex;
    align-items: center;
    font-size: 0;
  }
  
  .star {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
  }
  
  .rated .star {
    background-color: #f90;
  }
  
  .text {
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #666;
  }
  
  .text.rated {
    color: #f90;
  }
  </style>
  